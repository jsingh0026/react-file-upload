export const fetchMembers = async () => {
    try {
      const response = await fetch("https://file-upload-nodejs.herokuapp.com/members");
      const data = await response.json();
    //   return data;
    data.data.map( e => {
        return e.memberImage = 'https://file-upload-nodejs.herokuapp.com/' + e.memberImage;
    })
    return data.data;
    } catch (e) {
      console.log(e);
    }
  };