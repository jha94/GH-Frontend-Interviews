const { useEffect } = require("react")

const useComponentDidUpdate = (callback, dependencies) => {
  useEffect(()=>{
    return callback()
  }, dependencies)
}

export default useComponentDidUpdate