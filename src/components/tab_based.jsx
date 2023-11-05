import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../Shared/card';

const TabBased = () => (
    <Tabs>
        <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
            <h2>card 1</h2>
            <Card></Card>
        </TabPanel>
        <TabPanel>
            <h2>card 2</h2>
            <Card></Card>
        </TabPanel>
        <TabPanel>
            <h2>card 3</h2>
            <Card></Card>
        </TabPanel>
    </Tabs>
);

export default TabBased;