import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Faqs = [
  {id:'1', title:'What is PV Solar panel?', description:'Photovoltaics, also called PV solar panels, capture energy from the sun and convert it into electricity. Electricity generated from photovoltaic panels is often used to power appliances and equipment in the home.' },
  {id:'2', title:'How does PV solar panels work?', description:`Solar panels absorb energy from the sun throughout the day and convert it into direct current (DC). Most homes and businesses use alternating current (AC) electricity, so DC electricity must be converted to AC electricity by an inverter. Here, you will use your home's electricity or feed it back into the power grid.` },
  {id:'3', title:'How many PV panels i need for my home?', description:'Our experts will calculate the number of panels you need based on your electricity usage over the past year and the size of your roof. With a house of about 2000 square feet, it is estimated that 24 to 28 solar panels will be needed.' },
  {id:'4', title:'Which Direction is best for PV solar panels?', description:'In Singapore, PV solar panels will be placed facing north-south to maximize the amount of solar energy received.' },
  {id:'5', title:'What are the financial benefits of PV solar panels?', description:"Solar energy is a renewable energy source that reduces carbon emissions. Solar energy can reduce your home's electricity bills. Homes with installed solar panels can improve home value." },
  {id:'6', title:'Will i still receive electric bill if i havesolar panels?', description:'In Singapore, your home primarily consumes electricity from your solar system, for which you will not have to pay an electricity bill. After that, if you still need more power, the electricity will be taken from the power grid. You will pay your electricity supplier for this electricity.' },
  {id:'7', title:'Can i afford to go for solar?', description:'The answer is yes. This is because the cost of generating your own solar power is lower than buying from the power grid, saving you money and your work in the long run.' },
  {id:'8', title:'How long will my solar panel system last?', description:'Solar panels, also called photovoltaics or PV panels, have been around for over 25 - 30 years. For example, Singapore will soon welcome a floating solar panel, which is expected to generate enough electricity for 16,000 four-room HDB houses.' },
  {id:'9', title:'What is the installation time for PV solar panels?', description:'The solar PV installation itself usually takes two to five days, depending on the size and scope of the project.' },
  {id:'10', title:'Does maintenance of the solar panels need special expertise and equipment?', description:'Solar panels require minimal maintenance to ensure they continue to operate efficiently and generate solar energy for your home. The most common type of maintenance required for your trunk is cleaning. Dirt and dust can build up on your PV Panels, especially during heavy rains or long periods without rain. Occasional cleaning can remove this dirt and ensure that your solar panel receives optimal sunlight. Another type of maintenance you may want to do for your solar panel is an annual inspection. just to make sure everything is working as it should.' },
  {id:'11', title:'Why choose RICE Renewables?', description:'We are commited towards our customers with the most efficient and sustainable solar energy solutions.We understand the importance of fast execution, maintaining integrity and the highest industry standards. Therefore, we use the most efficient and advanced technology that makes switching to solar energy an easy choice.' },

]

const Faq = () => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  

  return (
    <>
    {
      Faqs.map((item) => 
        <Accordion expanded={expanded === 'panel'+`${item.id}`} onChange={handleChange('panel'+`${item.id}`)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
                <Typography variant="h6">{item.title}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ color: 'text.secondary' }}>
                 {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>


      )

    }
    </>
  )
}

export default Faq
