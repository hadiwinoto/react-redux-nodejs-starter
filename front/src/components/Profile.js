/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react'

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Card>
        <Image src='https://cdn4.iconfinder.com/data/icons/professional-avatar-5/48/transcriber_avatar_man_profile_professions-512.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            Matthew
          </Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>


    </div>
  );
};

export default Profile;
