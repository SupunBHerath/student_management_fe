import axios from 'axios';

export const createStudent = async (student) => {


  try {
    const response = await axios.post('/students', student);
    return student; 
  } catch (err) {
    console.error('Error creating student:', err);
    throw err; 
  }
};
