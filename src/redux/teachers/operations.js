import { db } from '../firebase';
import { get, ref, child } from 'firebase/database'; // Import 'child' if you prefer that syntax, but 'ref' with path is simpler here.
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTeachersThunk = createAsyncThunk(
  'fetchTeachers',
  async (_, thunkAPI) => {
    try {
      // Change this line to point to the 'teachers' node in your database
      const teachersRef = ref(db, 'teachers'); // Assuming your teachers data is at '/teachers'

      const snapshot = await get(teachersRef); // Use the reference to the teachers path

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Fetched teachers data:', data); // Log to see what you got
        return data; // This data will be the value of the 'teachers' node
      } else {
        console.log('No teachers data available');
        return null; // Or return an empty object/array depending on expected data shape
      }
    } catch (error) {
      console.error('Error fetching teachers:', error); // Log the error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
