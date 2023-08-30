import * as yup from 'yup';

export const renamedclassValidationSchema = yup.object().shape({
  name: yup.string().required(),
  section: yup.string().required(),
  academic_year_id: yup.string().nullable().required(),
  teacher_id: yup.string().nullable().required(),
});
