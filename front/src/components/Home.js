import React from "react";

import { Container, Item} from 'semantic-ui-react'


const Home = () => {
 
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
