import axios from 'axios';

export const getStudentData = async () => {
 try{
    const response = await axios.get('/students');
    return response.data;
 }catch(err){
    console.error('Error fetching student data:', err);
    throw err;
 }
} 