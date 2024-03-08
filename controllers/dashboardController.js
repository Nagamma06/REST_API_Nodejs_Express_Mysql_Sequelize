

const getDashboard = async (req, res, next) => {
    console.log("at controller",req.user);
  res.send('Welcome to the dashboard')

}

export default {getDashboard}