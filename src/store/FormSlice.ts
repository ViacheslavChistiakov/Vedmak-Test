import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  city: string;
  name: string;
  email: string;
  phone: string;
  note: string;
  selectedFile: File | null;
  agreed: boolean;
  isSubmitted: boolean;
  errors: {
    city: string;
    name: string;
    note: string;
    email: string;
    phone: string;
    agreed: string;
  };
}

const initialState: FormState = {
  city: '',
  name: '',
  email: '',
  phone: '',
  note: '',
  selectedFile: null,
  agreed: false,
  isSubmitted: false,
  errors: {
    city: '',
    name: '',
    email: '',
    note: '',
    phone: '',
    agreed: ''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setField: <K extends keyof FormState>(state: FormState, action: PayloadAction<{ field: K; value: FormState[K] }>) => {
      const { field, value } = action.payload;
      state[field] = value;
    //   state.errors[field] = ''; // Clear error when the field is updated
    },
    validateForm: (state) => {
      state.errors.city = state.city ? '' : 'Город не выбран';
      state.errors.name = state.name ? '' : 'Поле не заполненно';
      state.errors.email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(state.email) ? '' : 'Поле не заполненно';
      state.errors.phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(state.phone) ? '' : 'Поле не заполненно';
      state.errors.note = state.note ? '' : 'Поле не заполненно';
      state.errors.agreed = state.agreed ? '' : 'Поле не заполненно';
    },
    submitForm: (state) => {
      const isValid = Object.values(state.errors).every((error) => !error);
      if (isValid) {
        state.isSubmitted = true;
      }
    }
  }
});

export const { setField, validateForm, submitForm } = formSlice.actions;
export default formSlice.reducer;