import axios from 'axios';

export const updateStudent = async (id,student) => {

  try {
    const response = await axios.put(`/students/${id}`,student);
  } catch (err) {
    console.error('Error creating student:', err);
    throw err; 
  }
};
