

const MyClass = () => {

    

    return (
        <div className="w-5/6 mx-auto">
          <div>
            <h2 className="uppercase text-2xl font-bold my-10">MY CLasses</h2>
          </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="primary-design">
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyClass;