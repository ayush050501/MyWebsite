import React, { useContext, useState } from 'react';
import { MyContext } from '@/components/contextApi/MyContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const SideNav = () => {
    const { setDescription, setTitle } = useContext(MyContext);
    const [selected, setselected] = useState(0);
    const customers = [
      {
          name: "Rohan Verma",
          description: "Rohan Verma is a 32-year-old software engineer based in the tech hub of Bangalore. With a deep passion for coding, Rohan has mastered Python and JavaScript, and his contributions to open-source projects have earned him recognition in the developer community. He’s constantly exploring new technologies and enjoys the challenge of solving complex problems. When he's not working, Rohan spends his weekends hiking in the Western Ghats, immersing himself in nature. He's also a tech enthusiast who loves trying out the latest gadgets, whether it's the newest smartphone or an innovative piece of wearable technology."
      },
      {
          name: "Aisha Khan",
          description: "Aisha Khan, a 28-year-old marketing professional from Mumbai, is known for her creativity and strategic thinking. She has a keen eye for detail and excels in digital marketing, where she crafts campaigns that resonate with diverse audiences. Aisha is passionate about travel and has a blog where she documents her adventures to offbeat destinations, sharing stories, photos, and travel tips. Her journeys often inspire her marketing work, as she draws on her experiences to create authentic and engaging content. Outside of work and travel, Aisha enjoys exploring the vibrant cultural scene of Mumbai, from art galleries to food festivals."
      },
      {
          name: "Vikram Singh",
          description: "Vikram Singh, at 45 years old, is an entrepreneur who has built a thriving chain of organic food stores in Delhi. His business is driven by a commitment to health and sustainability, values that are reflected in every aspect of his life. Vikram starts each day with a session of yoga, a practice that helps him stay balanced and focused. He is passionate about promoting a healthy lifestyle and is involved in various initiatives to educate the public on the benefits of organic food. Vikram is also a strong advocate for environmental sustainability, supporting local farmers and reducing the carbon footprint of his business. In his free time, he enjoys reading about new developments in sustainable agriculture and exploring ways to integrate these into his business model."
      },
      {
          name: "Neha Patel",
          description: "Neha Patel is a 35-year-old fashion designer from Ahmedabad who has made a name for herself with her innovative designs that blend traditional Indian textiles with contemporary styles. Her boutique is a reflection of her unique aesthetic, offering clothing that tells a story of cultural heritage reimagined for modern times. Neha’s designs are not only beautiful but also ethical, as she is committed to using sustainable materials and practices in her work. She is currently expanding her brand to include a line of eco-friendly clothing, aiming to reduce the fashion industry’s impact on the environment. Neha’s creativity extends beyond fashion; she is also an amateur painter and often draws inspiration from nature and her travels around India. Her work has garnered a loyal customer base, and she dreams of taking her brand global, bringing her vision of sustainable fashion to a wider audience."
      },
      {
          name: "Rajesh Menon",
          description: "Rajesh Menon, a 50-year-old financial analyst from Chennai, is a veteran in the field with over 25 years of experience. He has seen the financial markets evolve and has a deep understanding of investment strategies, making him a sought-after advisor. Rajesh is known for his meticulous approach to financial analysis and his ability to predict market trends. Despite his busy career, he always finds time for his favorite pastime—playing chess. Rajesh participates in local tournaments and enjoys the mental challenge that chess provides, often comparing it to the strategic thinking required in his professional life. He is also a mentor to young analysts, sharing his knowledge and helping them navigate the complexities of the financial world. Rajesh believes in lifelong learning and regularly attends seminars and workshops to stay updated on the latest in finance and economics."
      },
      {
          name: "Simran Bhatt",
          description: "Simran Bhatt is a 30-year-old graphic designer based in Pune, where she has built a reputation for her creativity and attention to detail. Her work spans various mediums, from print to digital, and she is particularly known for her ability to create visually stunning designs that captivate audiences. Simran’s passion for design is matched by her love for photography, and she often merges these two interests to produce unique pieces of digital art. Whether it's capturing the vibrant streets of Pune or the serene landscapes of the Western Ghats, her photography is infused with a sense of emotion and narrative. Simran’s design philosophy is rooted in the belief that good design should not only be beautiful but also functional and meaningful. She is constantly experimenting with new techniques and tools to push the boundaries of her craft. In addition to her professional work, Simran is an active member of the local art community, regularly participating in exhibitions and collaborating with other artists on creative projects."
      }
  ]
  
  ;
    const handleClick = value => {
        setselected(value);
        setTitle(customers[value].name);
        setDescription(customers[value].description);
    };
    return (
        <div className='max-h-screen min-h-screen overflow-y-auto '>
            <div className='text-2xl text-primary text-center font-semibold my-4 tracking-widest'>Ayush Agrawal</div>
            <div className="flex flex-col justify-between p-2 rounded-lg">
                {customers.map((customer, index) => (
                    <Card key={index} className="mb-4 cursor-pointer">
                        <CardContent
                            className={`p-4 rounded-md ${index === selected ? 'bg-muted' : ''}`}
                            onClick={() => handleClick(index)}>
                            <h2 className="text-lg text-primary font-semibold mb-2">{customer.name}</h2>
                            <p className="text-sm text-muted-foreground text-ellipsis line-clamp-2">{customer.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
