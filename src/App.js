import Navbar from './components/navbar'
import Footer from './components/footer'

import Banner from './images/home/banner-hero.png'
import Banner2 from './images/home/Asset 22.png'
import ImageIcons from './images/home/icons.png'
import product1 from './images/home/Blue-Pack.png'
import product3 from './images/home/Pink-Pack.png'
import product2 from './images/home/Green-Pack.png'
import screenShoot2 from './images/home/Screen Shot 2021-02-26 at 17.23.47-1.png'
import screenShoot3 from './images/home/Screen Shot 2021-02-26 at 17.23.47-2.png'
import screenShoot1 from './images/home/Screen Shot 2021-02-26 at 17.23.47.png'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function App() {
  return (
    <div className='grid grid-cols-1'>

      <Navbar />

      <img className='h-auto w-auto' alt='Banner' src={Banner} />

      <div className='flex flex-col mt-4  items-center'>

        <h1 className="font-bold text-[39px] text-[#389CD6]">We're to help you</h1>

        <p className="text-center text-[20px] md:w-[550px]  w-auto mt-5 text-[#7B7070]">
          When it comes to caring for our most intimate areas, we’ve lost our connection.
        </p>

        <p className="text-center text-[20px] md:w-[550px]  w-automt-5 text-[#7B7070]">
          Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
        </p>

        <p className="text-center text-[20px] md:w-[550px]  w-auto mt-5 text-[#7B7070]">
          We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.

        </p>

      </div>

      <div className='flex flex-auto mt-4 justify-center'>
        <img className='h-auto w-auto' alt='icons' src={ImageIcons} />
      </div>


      <div className='flex flex-col mt-4'>
        <h1 className="font-bold md:w-[650px] self-center text-[39px] text-[#389CD6]">whatever your age. whatever your lifestyle. whatever your interests.</h1>

        <p className="text-center text-[20px] self-center md:w-[550px]  w-auto mt-5 text-[#7B7070]">
          Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.
        </p>

        <p className="text-center text-[20px] self-center md:w-[550px]  w-auto mt-5 text-[#7B7070]">
          As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.
        </p>

      </div>

      <div className='flex flex-row justify-around mt-20 items-center'>

        <Card className="w-96">
          <CardHeader floated={false} className="h-80 self-center">
            <img src={product1} alt='produto' />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2">
              Intibiome wellness daily intimate wash
            </Typography>
            <Typography className="font-bold text-white p-2 rounded-b-lg bg-[#389CD6]">
              Wellness
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-96">
          <CardHeader floated={false} className="h-80 self-center">
            <img src={product2} alt='produto' />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2">
              Intibiome active extra protection intimate wash
            </Typography>
            <Typography className="font-bold text-white p-2 rounded-b-lg bg-[#309D5F]">
              Active
            </Typography>
          </CardBody>
        </Card>


        <Card className="w-96">
          <CardHeader floated={false} className="h-80 self-center">
            <img src={product3} alt='produto' />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" className="mb-2">
              Intibiome agecare dryness relief intimate wash
            </Typography>
            <Typography className="font-bold text-white p-2 rounded-b-lg bg-[#EE6381]">
              Agrecare
            </Typography>
          </CardBody>
        </Card>

      </div>

      <img className='h-auto w-auto mt-20' alt='Banner' src={Banner2} />

      <div className='flex flex-col mt-20'>

        <h1 className="font-bold text-[29px] md:text-[39px] text-[#389CD6] self-center">Keep up to date with our discoveries</h1>

        <div className='flex flex-row justify-around mt-4 items-center'>

          <Card className="w-96">
            <img src={screenShoot1} alt='produto' />
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2 md:text-[20px] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardBody>
          </Card>

          <Card className="w-96">
            <img src={screenShoot2} alt='produto' />
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2 md:text-[20px] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardBody>
          </Card>


          <Card className="w-96">
            <img src={screenShoot3} alt='produto' />
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2 md:text-[20px] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardBody>
          </Card>

        </div>

        <button className='mt-5 bg-[#389CD6] p-2 w-40 rounded-lg self-center text-white'>See more</button>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
