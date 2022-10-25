import { NextPage } from 'next';
import PrivatePage from '../../components/PrivatePage';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Moment } from 'moment';

const CreatePost: NextPage = () => {
  const [value, setValue] = useState<Moment | null>();

  return (
    <PrivatePage>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <h1 className="text-blue-200 text-2xl text-center">Create Reminder</h1>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Date Time Picker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <h2>{value?.toString()}</h2>
      </LocalizationProvider>
    </PrivatePage>
  );
};

export default CreatePost;
