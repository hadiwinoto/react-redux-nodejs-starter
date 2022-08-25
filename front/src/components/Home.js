import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import { Container, Image, Item} from 'semantic-ui-react'


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    
        <Container>
            <div className="card">
              <Item.Group>
                <Item>
                  <Item.Image size='tiny' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F5ee76fef943b3e292b22aa39%2F5f738c6dc08cdcf660008ec6_apartment_building.jpg&f=1&nofb=1' />
                  <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      sjfpasjaspfjsjfsfps
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                </Item.Group>
            </div>
        </Container>
  
  );
};

export default Home;
