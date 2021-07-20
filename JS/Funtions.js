function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns)*200
  }
  
  const totalCost = costOfMonitors(5,4)
  
  console.log(totalCost)

  //Function Expressions============
  const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true
    }else{
      return false
    }
  }
  
  
  
  console.log(plantNeedsWater('Tuesday'))