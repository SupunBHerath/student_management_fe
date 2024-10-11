import axios from 'axios';

export const deleteStudent = async (id) => {
console.log(id);
alert('deleteStudent')

  try {
    const response = await axios.delete(`/students/${id}`);
  } catch (err) {
    console.error('Error creating student:', err);
    throw err; 
  }
};
