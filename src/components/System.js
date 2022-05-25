import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Books from './Books'
import Inventory from './Inventory';
import Search from './Search';
import How from './How.';
import History from './History';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%",opacity:0.95 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Books available here 🐛" {...a11yProps(0)} />
        <Tab label="Inventory 🐇" {...a11yProps(1)} />
        <Tab label="Search Book 🦖" {...a11yProps(2)} />
        <Tab label="History 👀" {...a11yProps(3)} />
        <Tab label="How 👽" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Books></Books>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Inventory></Inventory>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Search></Search>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <History></History>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <How></How>
      </TabPanel>
    </Box>
  );
}
