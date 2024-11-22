   import { data } from "autoprefixer";
import AnalticCards from "./Analytic";
   import Nav from "./NavBar";

   export default function Dash(){
     const practice = async () => {
      try{
         const details = await fetch('https://official-joke-api.appspot.com/random_joke');
         const response = await details.json();
        const meta = (response.setup);
      }catch(error){
         console.log(error);
         
      }


     }

     practice()
      return(
      <>
      <Nav />
      <div className="bg-gray-900 mb-5">
      <div className="p-3 border rounded-lg flex flex-row gap-52 ">
         <img 
         className="border rounded-lg w-20 cursor-pointer mt-3 shadow-lg hover:shadow-2xl transition-shadow duration-300"
         src="https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695.jpg" alt="Weather Report" />
         <img 
         className="border rounded-lg w-20 cursor-pointer mt-3 shadow-lg hover:shadow-2xl transition-shadow duration-300"
         src="https://www.shutterstock.com/image-vector/attendance-concept-vector-flat-design-600nw-1610119216.jpg" alt="Attendance" />
      <img 
         className="border rounded-lg w-20 cursor-pointer mt-3 shadow-lg hover:shadow-2xl transition-shadow duration-300"
         src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-teachers-day-characters-png-image_9143439.png" alt="Teacher" />
      <img 
         className="border rounded-lg w-20 cursor-pointer mt-3 shadow-lg hover:shadow-2xl transition-shadow duration-300"
         src="https://img.freepik.com/free-vector/teacher-sneezing-spreading-virus-classroom_1308-76563.jpg" alt="ClassRoom" />
      <img 
         className="border rounded-lg w-20 cursor-pointer mt-3 shadow-lg hover:shadow-2xl transition-shadow duration-300"
         src="https://media.istockphoto.com/id/1305960821/vector/coaching-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=fOvPzPQokjWja7D8_bUKr8wP7eKiiW5JCTGT9Ixqk-U=" alt="Weather Report" />
      
      </div>
      <div className="mt-15">
      <AnalticCards />
      </div>
      
      </div>
      </>
      
      );
   }