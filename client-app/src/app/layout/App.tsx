import React,  { useEffect} from 'react';
import NavBar  from '../layout/NavBar';
import { Container} from 'semantic-ui-react'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from '../layout/LoadingComponent';
import { useStore } from '../stores/store';
import {observer} from 'mobx-react-lite';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
  
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '10em'}}>
        <ActivityDashboard />
      </Container> 
    </>             
  );
}

export default observer(App);
