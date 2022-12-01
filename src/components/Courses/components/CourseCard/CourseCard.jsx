import Button from '../../../../common/Button/Button';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGeneratop';
import React, { useContext } from 'react';
import { Context } from '../../../../Context';
import s from './CourseCard.module.css';
import { useNavigate, Link } from 'react-router-dom';

const BTN__TEXT = {
	showCourse: 'Show course',
};

export default function CourseCard({ course }) {
	const [context, setContext] = useContext(Context);
	const { id, title, description, authors, duration, creationDate } = course;
	const navigate = useNavigate();

	const findAuthorById = (id) => {
		const author = context.authors.find((author) => author.id === id);
		return author.name;
	};

	const listAuthorsString = (ids) => {
		return ids.map((id) => findAuthorById(id)).join(', ');
	};

	return (
		<div className={s.card__container}>
			<div className={s.card__left}>
				<h2>{title}</h2>
				<p className={s.course__description}>{description}</p>
			</div>
			<div className={s.card__right}>
				<p className={s.card__authors}>
					<b>Authors: </b>
					{listAuthorsString(authors)}
				</p>
				<p>
					<b>Duration: </b>
					{`${pipeDuration(duration)} hours`}
				</p>
				<p>
					<b>Created: </b>
					{dateGenerator(creationDate)}
				</p>
				<Button
					buttonText={BTN__TEXT.showCourse}
					type='button'
					onClick={() => navigate(`/courses/${id}`)}
				></Button>
			</div>
		</div>
	);
}
