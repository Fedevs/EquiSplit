export default function Welcome() {
  return (
    <section
      data-testid='welcome'
      style={{ height: 'fit-content' }}
      className='p-4 max-w-2xl mx-auto'
    >
      <h1 className='text-3xl font-bold mb-4 text-center  '>
        Expense Splitting App
      </h1>
      <p className='text-gray-700'>
        This tool is designed to simplify the management of
        shared expenses among friends, roommates, or any
        group. Splitting expenses has never been so
        straightforward. Below, we outline the basic steps
        to use the application:
      </p>

      <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-2'>
          Step 1: Introduction
        </h2>
        <p className='text-gray-700'>
          In this section, we provide a brief overview of
          the app and its purpose. Our application allows
          you to add participants, record their
          contributions, and automatically calculate who
          owes whom at the end.
        </p>
      </div>

      <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-2'>
          Step 2: Add information
        </h2>
        <p className='text-gray-700'>
          In the second step, you can add all the
          participants in the shared expense. Enter their
          names and the amounts they contributed. The app
          will take care of the rest, automatically
          performing the necessary calculations.
        </p>
      </div>

      <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-2'>
          Step 3: Final Calculation
        </h2>
        <p className='text-gray-700'>
          In the last step, the app will present a detailed
          summary of debts and credits between participants.
          You will know exactly who owes whom and in what
          amount. Doing the math will no longer be a
          headache!
        </p>
      </div>

      <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-2'>
          Quick Tips:
        </h2>
        <ul className='list-disc list-inside text-gray-700'>
          <li>
            Ensure you enter information accurately at each
            step.
          </li>
          <li>
            Feel free to go back and adjust contributions
            before making the final calculation.
          </li>
        </ul>
      </div>

      <p className='mt-6 text-gray-700'>
        Let&apos;s get started on fairly and efficiently
        splitting those expenses!
      </p>
    </section>
  );
}
