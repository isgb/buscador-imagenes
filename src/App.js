import {Formik,Form, Field} from 'formik'
import './header.css'

function App() {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search : ''}}
          onSubmit={ async values => {
            // llamar a api unsplash
            console.log(values)
          }}
        >
          <Form>
            <Field name="search"/>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
