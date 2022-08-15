// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacione {
        nodes {
          slug
        }
      }
    }
  `)
  
  if(resultado.errors){
    reporter.panic('No hubo resultados', resultado.errors)
  }

  const habitaciones = resultado.data.allDatoCmsHabitacione.nodes;
  
  console.log(habitaciones)
  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/Habitaciones.js'),
      context: {
        slug: habitacion.slug
      }
    })
  });
}
