import React from "react";
import { Container, Item} from 'semantic-ui-react'

const Home = () => {
 
  return (
        <Container>
            <div className="card">
              <Item.Group>
                <Item>
                  <Item.Image size='tiny'/>
                  <Item.Content>
                      
                  </Item.Content>
                </Item>
                </Item.Group>
            </div>
        </Container>
  );
};

export default Home;
