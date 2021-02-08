import React from "react";
import MaterialTable from "material-table";


//  using material table
const HeroesList = (props) => {
  return (
    <div>
      <MaterialTable
        options={{
          headerStyle: {
            fontWeight: "700",
          },
        }}
        columns={[
          {
            title: "Name/Secret Identity",
            field: "name",
          },
          {
            title: "Powers",
            field: "powers",
            cellStyle: {
              width: 20,
              lineHeight: "1.5em",
            },
          },
          {
            title: "No. of Heroes",
            field: "input",
            type: "numeric",
            render: (rowData) => (
              <input
                id='noOfHeroes'
                min='0'
                max='10'
                name='name'
                type='number'
                style={{ width: "3em" }}
                onChange={props.handleNumberOfHeroes}
              />
            ),
          },
        ]}
        data={props.allHeroes}
        title='Hero Information'
      />
    </div>
  );
};

export default HeroesList;
