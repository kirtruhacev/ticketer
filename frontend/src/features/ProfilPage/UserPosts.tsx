import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap'
import { getPosts, getPostsByAuthorId } from '../../client/postHandler';
import '../../stylesheets/ProfileInfo.css';
import PostInfo from '../createpostpage/PostInfo';
import PostTemplate from '../createpostpage/PostTemplate';
import { Post } from "../../types";
import { store } from '../../redux/store';

function UserPosts() {
  let rendered=false;

  const [posts, setPosts] = useState<Post[]>([]);
  const activeUserId = store.getState().user.userId;
  
  async function getUsersPosts(){
    if(activeUserId) {
      try {
        setPosts(await getPostsByAuthorId(activeUserId));
      } catch (error: any) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    if(!rendered){
      getUsersPosts();
      rendered=true;
    }
  }, [])

  

  return (
    <div className="mt-0 ml-5 mr-5 p-0">
    <Container>     
        <h2 className='text-center'>Dine Ticketer</h2>
        <CardGroup>
          {posts.map((post, idx) => (
            <PostInfo
              key={idx}
              createdAt={post.createdAt}
              timeOfEvent={post.timeOfEvent}
              city={post.city}
              venue={post.venue}
              forSale={post.forSale}
              title={post.title}
              description={post.description}
              category={post.category}
              price={post.price}
              authorId={post.authorId}
              />
          ))}
        </CardGroup>
    </Container>
  </div>
  );
}

export default UserPosts;
