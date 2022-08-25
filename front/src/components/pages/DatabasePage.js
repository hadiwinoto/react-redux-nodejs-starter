/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Item } from 'semantic-ui-react'

const BoardDatabase = () => {

  let array = [
    {
      "id": 1,
      "nama": "Apartment Green Pramuka",
      "alamat": "JL. Pramuka No 123"
    },
    {
      "id": 2,  
      "nama": "Apartment Green Residence",
      "alamat": "JL. Pramuka No 123"
    },
    {
      "id": 3,
      "nama": "Apartment PIK 2",
      "alamat": "JL. Pramuka No 123"
    },
    {
      "id": 4,
      "nama": "Apartment Kelapa Gading",
      "alamat": "JL. Pramuka No 123"
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
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
            {array.map((data, i) => {
              return <div className="card">
              <Item.Group>
                  <Item>
                    <Item.Image size='tiny' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F5ee76fef943b3e292b22aa39%2F5f738c6dc08cdcf660008ec6_apartment_building.jpg&f=1&nofb=1' />
                    <Item.Content>
                      <Item.Header as='a'>
                          <a href="/database/detail">
                            {data.nama}
                          </a>
                      </Item.Header>
                      <Item.Extra>Additional Details</Item.Extra>
                      Alamat : {data.alamat}
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

export default BoardDatabase;
