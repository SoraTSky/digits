import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'digits-background'}>
          <Grid container stackable centered column={3}>

            <Grid.Column textAlign={'center'}>
              <Icon size='huge' name={'users'} />
              <Header as={'h1'} >Multiple Users</Header>
              <Header as={'h1'} >This address book enables any number of useres to
              register and save their business contacts. You can only see the contacts you
                have created.</Header>
            </Grid.Column>

            <Grid.Column textAlign={'center'}>
              <Icon size='huge' name={'file alternate'} />
              <Header as={'h1'} >Contact Details</Header>
              <Header as={'h1'} >for each contact, you can save their name, address and phone number.</Header>
            </Grid.Column>

            <Grid.Column textAlign={'center'}>
              <Icon size='huge' name={'calender check'} />
              <Header as={'h1'} >Time Stamp Notes</Header>
              <Header as={'h1'} >Each time you make contact with a contact, you can write
                a note that summarizes the conversation. This note is saved along with timestamp
                of the contact.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
