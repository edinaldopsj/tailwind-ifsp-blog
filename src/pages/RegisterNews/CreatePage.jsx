import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import CreateNew from './create';
import { createUserNews } from '../../providers/news/user';

function CreateNewsPage() {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newNews = await createUserNews({
      userNews: {
        title: data?.title,
        subtitle: data?.subtitle,
        content: data?.text,
      },
      userId: 2, // TODO: remove arbitrary userId
    });

    if (newNews) {
      toast('Notícia criada com sucesso!', {
        type: 'success',
        autoClose: 3000,
      });

      navigate('/news/list');
    }
  };

  return (<CreateNew onSubmit={onSubmit} />);
}

export default CreateNewsPage;
