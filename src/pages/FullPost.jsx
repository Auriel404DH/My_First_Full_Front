import React from 'react';

import { Post } from '../components/Post';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import ReactMarkdown from 'react-markdown';

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        console.warn(e);
        alert('err');
      });
  }, []);

  if (loading) {
    return <Post isLoading={loading} isFullPost />;
  }
  return (
    <>
      <Post
        id={data.data._id}
        title={data.data.title}
        imageUrl={data.data.imageUrl ? `http://localhost:4224${data.data.imageUrl}` : ''}
        user={data.data.user}
        createdAt={data.data.createdAt}
        viewsCount={data.data.viewsCount}
        commentsCount={3}
        // tags={data.data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.data.text} />
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: 'Вася Пупкин',
              avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
            },
            text: 'Это тестовый комментарий 555555',
          },
          {
            user: {
              fullName: 'Иван Иванов',
              avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
            },
            text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
