import { locales } from '@/constants/locales';
import React from 'react';
import Icon from '../common/Icon';
import Template from '../common/Template';
import Title from '../common/Title';
import { StFaq } from './styled';

const Faq: React.FC = () => (
  <Template>
    <div className="container content">
      <StFaq>
        <Title text={locales.faq} />
        <Icon className="faq__img" fill name="faq_img" alt="faq" ext="png" />
        <p className="faq__description">{locales.faq_description}</p>
        <p className="faq__text question">{locales.faq_question_1}</p>
        <p className="faq__text">{locales.faq_answer_1}</p>
        <p className="faq__text question">{locales.faq_question_2}</p>
        <p className="faq__text">{locales.faq_answer_2}</p>
        <p className="faq__text question">{locales.faq_question_3}</p>
        <p className="faq__text">{locales.faq_answer_3}</p>
        <p className="faq__text question">{locales.faq_question_4}</p>
        <p className="faq__text">{locales.faq_answer_4}</p>
        <p className="faq__text question">{locales.faq_question_5}</p>
        <p className="faq__text">{locales.faq_answer_5}</p>
        <p className="faq__text question">{locales.faq_question_6}</p>
        <p className="faq__text">{locales.faq_answer_6}</p>
      </StFaq>
    </div>
  </Template>
);

export default Faq;
