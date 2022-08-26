import React, { Component } from 'react'
import { List,Card } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'


export default class BoardKomersial extends Component {
  state = { activeItem: 'Komersial' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
    
    <div className="container">
      <div className="row">

        <div className="col-md-3">
          <div className="card">
              <Menu secondary vertical>
                  <Menu.Item
                    name='Komersial'
                    active={activeItem === 'Komersial'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name='Industri'
                    active={activeItem === 'Industri'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name='Agri'
                    active={activeItem === 'Agri'}
                    onClick={this.handleItemClick}
                  />
            </Menu>
          </div>
        </div>

        <div className="col-md-9">
              <div className="card">
                    <Card.Content>
                      <Card.Header>Database Komersial</Card.Header>
                    </Card.Content>
                    <List divided relaxed>
                    <List.Item>
                      <List.Icon name='building' size='large' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a' href="/database/apartment">Apartment</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='building' size='large' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a' href="/database/hotel">Hotel</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='building' size='large' verticalAlign='middle' />
                      <List.Content>
                        <List.Header as='a'>Resort</List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
              </div>

          </div>
        </div>
      </div>
  );
}; 
}