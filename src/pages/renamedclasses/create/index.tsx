import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createRenamedclass } from 'apiSdk/renamedclasses';
import { renamedclassValidationSchema } from 'validationSchema/renamedclasses';
import { AcademicYearInterface } from 'interfaces/academic-year';
import { UserInterface } from 'interfaces/user';
import { getAcademicYears } from 'apiSdk/academic-years';
import { getUsers } from 'apiSdk/users';
import { RenamedclassInterface } from 'interfaces/renamedclass';

function RenamedclassCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: RenamedclassInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createRenamedclass(values);
      resetForm();
      router.push('/renamedclasses');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<RenamedclassInterface>({
    initialValues: {
      name: '',
      section: '',
      academic_year_id: (router.query.academic_year_id as string) ?? null,
      teacher_id: (router.query.teacher_id as string) ?? null,
    },
    validationSchema: renamedclassValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Renamedclasses',
              link: '/renamedclasses',
            },
            {
              label: 'Create Renamedclass',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Renamedclass
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.section}
            label={'Section'}
            props={{
              name: 'section',
              placeholder: 'Section',
              value: formik.values?.section,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<AcademicYearInterface>
            formik={formik}
            name={'academic_year_id'}
            label={'Select Academic Year'}
            placeholder={'Select Academic Year'}
            fetcher={getAcademicYears}
            labelField={'year'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'teacher_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/renamedclasses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'Renamedclass',
    operation: AccessOperationEnum.CREATE,
  }),
)(RenamedclassCreatePage);
