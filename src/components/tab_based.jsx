import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevelopment from './WebDevelopment';
import DigitalMarketing from './DigitalMarketing';
import GraphicsDesign from './GraphicsDesign';

const TabBased = () => (
    <Tabs>
        <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
            <WebDevelopment></WebDevelopment>
        </TabPanel>
        <TabPanel>
            <DigitalMarketing></DigitalMarketing>
        </TabPanel>
        <TabPanel>
            <GraphicsDesign />
        </TabPanel>
    </Tabs>
);

export default TabBased;