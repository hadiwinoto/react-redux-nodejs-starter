/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect }  from "react";
import { Item, Button, Label, Icon } from 'semantic-ui-react';

import authHeader from '../../services/auth-header';
import API from '../../services';

const BoardDatabaseHotel = () => {
  const [database, setDatabase] = useState([]);
  // const [currentDatabase, setCurrentDatabase] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchNama, setSearchNama] = useState("");

  useEffect(() => {
    retrieveDatabase();
  }, []);
  
  // const onChangeSearchNama = e => {
  //   const searchNama = e.target.value;
  //   setSearchNama(searchNama);
  // };


  const retrieveDatabase = (data) => {
    API.master.getDatabase(data,authHeader())
      .then(response => {
        setDatabase(response);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <label>Pencarian</label>
            <div>
              <label> Nama </label>
              <input className="form-control"></input>
            </div>
            <div>
              <label> Tahun Pengembangan</label>
              <select className="form-control">
                <option></option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="col-md-9">
          <div className="mt-3"><span> {database.length} Data Hotel di temukan</span></div>
          {database &&
           database.map((data, i) => {
            return <div className="card" key={i}>
              <Item.Group divided>
                <Item>
                  <Item.Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F5ee76fef943b3e292b22aa39%2F5f738c6dc08cdcf660008ec6_apartment_building.jpg&f=1&nofb=1' />
                  <Item.Content>
                    <Item.Header as='a'>{data.nama}
                    <Label className="ml-3">
                      {data.kelas}
                    </Label>
                    </Item.Header>
                    <Item.Meta>
                      <p> Status : {data.status}</p>
                    </Item.Meta>
                    <Item.Meta>
                      <p> Alamat : {data.alamat}</p>
                    </Item.Meta>
                    {/* <Item.Description>paragraph</Item.Description> */}
                    <Item.Extra>
                      <Button primary floated='right' size='small'>
                          Lihat Ketersediaan
                        <Icon name='right chevron'/>
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardDatabaseHotel;
