
import React, { useState, useEffect } from 'react';

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Frontend Web Development",
      role: "I build responsive and interactive websites using HTML, CSS, JavaScript, and TypeScript to deliver seamless user experiences.",
      image: "https://miro.medium.com/v2/resize:fit:600/1*92LYJgZ83xWUeFw3vicEDw.jpeg",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      name: " React.js Single Page Applications (SPA)",
      role: "Expert in creating modern, fast, and scalable web apps using React.js and component-based architecture.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg",
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 3,
      name: "UI Styling with Bootstrap & Tailwind",
      role: "Skilled in building attractive, responsive designs using Bootstrap and utility-first styling approaches like Tailwind CSS.",
      image: "https://www.devwares.com/static/27cd561429da806c665058e7d66bb81a/d9e4b/differences-between-tailwind-css-and-bootstrap.png",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      name: "Firebase Integration",
      role: "Setup of authentication, hosting, and real-time databases using Firebase for dynamic, full-featured frontend apps.",
      image: "https://www.gstatic.com/devrel-devsite/prod/v6dc4611c4232bd02b2b914c4948f523846f90835f230654af18f87f75fe9f73c/firebase/images/touchicon-180.png",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 5,
      name: "Code Collaboration & GitHub Projects",
      role: "Version control with Git and hosting open-source or personal projects on GitHub — I write clean, reusable, and well-documented code.",
      image: "https://rock-the-prototype.com/wp-content/uploads/2022/01/github-repositories-1.jpg",
      gradient: "from-red-400 to-pink-500"
    },
    {
      id: 6,
      name: "Portfolio & Personal Website Development",
      role: "Custom one-page or multi-page responsive portfolios and business websites to help you establish your online presence.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEg8VFRUVEBUQGBYVFxcYFhIYFRUWFxYVFxUZHSggGholHhUVIjEhJikrLi4uFx8zODMsNyktLisBCgoKDg0OGA8QFy0fHR8rKy0tKy0tLi0rLS0rLSstLS0rKy0tLS0rLS0tKy0tKy0rLS0tKy0tKy0tLSstLS8tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEHBAUGAwj/xABQEAABAwEEBAkGCQkHAwUAAAABAAIRAwQSITEFBkFREyIyUmFxgZGxJFRykqHRBxQjQoKTsrPSFRYzNFNiouHwF0NVc5TB4jVj8URkg8LT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEBAQACAQMEAQQDAQAAAAAAAAECEQMSMTIEIUFRgWFxsfATkcEF/9oADAMBAAIRAxEAPwDuwE0JgFMLVDzhQQvQhIUB5lKU5SlAeZSFOUhQCFIU5SFMiFIUxSlAIV5lOUhTNp9af1Z/pM+0Fw7yu31p/Vn+k37QXDVMj1Ln5fJ2+n8Py7n+zh/nY+qP41j23UHgWl9S3NaOmkcTuAv4noXd6xaS+KWd9YCSBhOXWqK01pe1Wyo+0Gq4hhuNxy28VowGO5XMYywzzyvdnWmz0WuLRaMRzqZaP4S6Fj2izPYJIlpwDm4tPRIyPQcVp2uqE3nkdcjw9y6vVek++KznX6QIZUa4SHsODmnnYGcdyqYp5ebovv2aMpCuu151U+JkVqMmg8xv4JxxDSdrTsPYdk8gU4ve/cpSFM4pCriKUpCmJSFXGdKUqlx/r+u1QtIihQVKgoJ3FHkM9EeAUlLR5DPRHgpKzMqFCEBcQCmEBBKwN42quym0ve4NaIlxMASYGPWQtadYLH51S9YLy12PkFo6mfesVTkqMs7LpvxcUzm7VtHWCx+dUvWCQ6wWPzql6wVWm0N20mnDaXf/AFIXhXqh0RTa30S4z6ziiZ1f+Cfa1H6w2Pzql6wXi7WGyec0/WCqolISqmSbwz7WodYbJ5zT9YJDrDZPOafrBVWSkJVRN44tQ6w2Tzmn6wSHWGyec0/WCqwlebiqkRcItQ6w2Tzmn6wSHWGyec0/WCrK0WhrhAosYZmWmpPVDnkexJWtDS2BRY0wBeBqThGwvInDdtKqYpsd3rDpqz1KDmtrscbzcA4E4OC5GpamQeMMt6whamAAGz0zAAJJqgujabtQCeqF52as1pktkXg67BLTF7Aw5pjHfsSvDL7rw5rhNRcetundHWux1qLbfQvlhLPlG4uAkDty7VWFOrRZY2U2ubfgl2OZKwalqpkQGXTDhID5N5pEG9VcIkzlOCwlU44MOa4TUebnEldRo4vNNjaNUAEta9hLmkY8sEHFaBt0sI6Z9iLBWu1Bj0bvasuyufj3jtf9GzNtFhbQq4h9AU3ZEggQCCNoIBHUFRtqpOpvfTdymPdTPW0lp9oVr6lVCLFTJvyXPJLySTDi0bBAgAYblW+ueGkLVHPafWpscfaURHHuTRdCaUr2ck0WBxL2Pxa52LWVqbRDSMCK7+2IiFlnWK2YuFFoktqkhlUXhTouoNJh8Foa/wBa6eha3Rdsr0+NSZeuVqVom65wa+iKpYSRsh1QwcCAdy2Fk0xbaNJtBlCGCkaYHBVJuOeaucz0h2YAwIxKvR0jtM2suoeTNL6FUVmng614uZwQHCcfjQ2lSZsMAYzinZrLbmupngGyymKADqdU3gHX2hwvcZwLmkOzy5zryv03b7z6hpHjVnVT8k+6HmQ6ObN4AgZ3WTJAWHV05aWOpFzA11KrTqtvNcDfoM4AEhx3Uw10RJpCcQqk/RFZNLWa2cJebQpl16k4gU6hvOo3WUyWh+BHBxIg8sZEhYelNKWmvToUH0QBTNRzA1lQOdLnPfgXEEAuOQ4oEYCV7UtbLU14eODkVTWALCQHGo2rlOx7S4bQaj4PGK8BrFaAKbRcDWNewC6YIqMqsdOM5V6kRGYzgK9folqnsIMEEHcRCUrIt1sfXqOq1DL3Bt484taG3jvcYknaSScSscqidvR5DfRHggqKPIb6I8EFZmVCEIC4pQSklBKxNpNdT5BaOpn3rFVBKtXXU+QWjqZ96xVQSss+7r4PG/uglISpJSEpSNLUEqa1J7A0uY5odkXNIDsGuwJzwc09TgdoSErdWTWQ03F3AtdNmoWaC7ACgymy+MM3CkJ6ytJGdrRlpu34N2bt6DdkiQL2UwCY6F5Fw3rq7HrOQaz22RrjUtYtBb82n8m5oDTGDiXOxjKRtwiy6x1WEuNga4n4vleDfkHNIhsES64xpjdvKqM7XKPYQ1ryCGuLg1xGDi2LwByJF5s7pG9I5hDQ66bpJAdBukiJAORIkYdI3rrGax1LrAbBeuODgbzgbwszLOZ4sGeCvkH5w6MdfT0i9pk2ImLRa7Q0SQGOtTaVNwADc2CiLu4kGMAFpEWudc8b1D8CQcCDBBwIIzBGwrp7brQ8msKljY01KFeiIJbcbXdVIddiHFgqQDhyG7liae1jba2OabKGONetaA8VCSH16pqOmW4tAcWxO47IVzf0i1oChCFaAhCEApIxXeaq6h0a9npWitUqS8FwYwtAAkgSSCZwntVeVKmJwXS6F11tlmYxgc11MCA1zQbu3AiDv2rkrpyt0tuwWFlnpMo05utECTJxJJJPWSqm1zdOkLV6bR3U2A+C6vRmv4Jd8YpgC7eDqc49F0k9G1V/arQ6rUfVdynvdUPQXEkgdGKMYzxZejbZWpY0pnhGVJDZ4zBUa3sirUBBwIdBlZbtM2y4GY3QBAuYAigbNMxM8E4tPfnitbZi3GbvaXDuhexufuevU6cIWsgrLfpu2wQZMh8ks5d9jWPL8IfIa2S6ZOJkkrD0na7RaCOEaSeEq1RDCMarmuqRhleExsLnb15gNMciYGb3Y/7Tgh1zHkevU7exXIisX4u/mO9UrzWTXLQMA3HDiueSO/t71jK0hQVKgoDtaPIb6I8EFRR5DfRHggrM0KEIQFvSiUkolYm0uuh8gtHUz71iqklWprofIbR1M+9YqpJWeXd1cPiHnwXmSmefDqXmSnIu1BKQlSSkJVyM7UEp7PZn1CQxs4Y7gOkrIsFma4VKjyQymGzGZLpgdAwKwTXrAcLTN1pcQ1uwgYYjq7VW9FjjuvZ1iMwHMJyiSPa4ALGtFBzDdc0tMTBGzeN4RQc+ZJgk7/D+a3Fr0fVNmNVxDgOMMIP7x3QRJPUE8cmHJlMctfDQkqEIW6QhCEEEIQgMUkEnrXu0XhEdqyRs6lBXJ8ujRKbYESpQUBVCpwoKAVBK1iaUpVJKVXGdShCEyCgqVBQHZ0eQ30R4IKilyG+iPBBWZlUpVKYW1KCUkqJWBtProfIbR1M+9YqqJVpa5nyG0dTPvWKqyVN7uji8Q89eQz/rJeZKklISnIq1BKQlSSkJWkjO16sc4sq0h89s9RZJBPe4doW00vSYyz02MEXWAEdOE+IWBSqhtFxuGSXcbYHC6Wg9GfeViV7e9xvHGRBG8Ye4FTe7fjusf3YlHFwvZT3rs7JRqVbrGVA+ncc4NBIcDdM0yyYMrmqjWmm2MxPivfQtUhxaC6c+KbpwMyDBx7EdmHqeL23K1kb0L0tLy57yTJL3EkmSccydq810ucIQhACEIQHuHmBjsUF53qBkOpQVy/Lp+AXnegVDvSlQFURXuKzt6g13c4rzC6PUuwUq1SrwjA+6xsA5YkyY7FpPaJrnjXdzil4Z29W6dS6XB8L8Tp3fR/lC1h0TYR/c0e4bM1GHPx576bvRZYZTurThXb0cK7erL/JVh/Y0e5v9bEHRVhx+Ro4dDd0rTridK0NQn/wEhXfaxaIsostWpTpMa5oBDmQMbwEYda4Eqpdh2NLkt9EeCCopclvojwUFQEShQhMLXlQSllRKxDT65nyGv1M+8YqsJVoa5HyGv1M+8YqtJSrfj8UEpCVJKQlVIdqCUhKklLBJgCScABmegBXIi1kaPe6+KYdAe4NdIBB7DhOfethbrFRvVCDiG8IIENAEYR3JLFoZ03qjrt1t+GkXsOnYU2nq4pl9wtN8AOgZbRHipy014/byacY4DMmB2qG1LhwAkHMzOHasXhjOCzaD2XvlGCHbRIg9QKWNk7p5bb2Y5M4oWwtVibcc9h5LoLTjgYhwPbktet5duYIQhMBCEIDbt0lTHBn4szi8HOXHuCoCTxc3X2zmPkxhumhpWm1rGmzMJa0NJMcYgUQSeLt4J/1ru3FpuMAAuyGVQewIvEbXZ7KjVyty221te1jW0msu3iTgXOLnvdi4AYAOAA3NCxFlB7pxc76xv9bEGqQJl+79IDtGzPYqhVjLq/g/Pylcf9tvsJnxHeuWqOkk49pk9Mldv8E+rlmt9otHxhrnNpUmFrWvcyS9zhJcwh2AblMYrS+KFiu1jeaApXfcevtxhc4bP/V1vu6+9bYavav8P8X4/CXrkfGLXdvTFy/fu3pwic8M1tB8HmiTlSft/wDU2jZn/e9IXLxcXHxb6Zff/nb8HeXr+d6cs2ztiC0H6I9yY0W8wdw/rYF1H9neiv2NTKf1m05b/wBJkp/s40X+wqf6m0//AKLXqhOB1pAbYq+AAugbsbzVWZV06/6h2Cho60V6NOoypSDXtJrVXjltaQW1HkYhxxzVLFbcdlia66lyW+iPBBUUjxW+iPBBQCoUIQFqSolLKiViGh1+rlmjrS8CYFPPprUx/uqa/LLuYPari1/pOfo20saJJFOB/wDNTKpn8j2j9ke8e9RldVrhMtexzph3MHtTDSNQ5U92w7cQvH8kWj9me8e9Z7X24ZNAyHJp/NEDuU9d+z6cvphO0m7IsHtT2XTL6dRlQNEseHjPNplRarFaajrzqeMRhdE9gXmzR1dpDgwgggjEZjtT68vstX6bSlrXXvtcKbXYxdMlrpPJidqwLfpOo+o8uYGkuktxF3og4rIbXtwjoiMKezZl0LEtdmtFV5qPbLjEnDYI/wBkbqrcnm22ukQ0E7M16Ptz3YcHkL23LeeiElKx12Oa4MILSHDEYEGRtWf8etvRkByaezLZ/UI90+7Hp6ae1rm3QQ4RjOGfvWP+UDzQva2m01rt9s3ZiA0ZxOXUFi/EqnM8FUuc7JsZD7VUGdOMJxB715/lA80LOGkraIE5YclntwXnWt1re1zXGQQQcGZHqCfVyDUYv5QPNCPygeaF5fFKnN8EfFKnN8EdXIXs39Go260yMWg8gGMBtlSXtxxHqBY1IQ1o/dHgvRtF7ouscZmIBMxE5bpHeERoYvbvGUcgJal043sdwbE9eK8ntIzEbcUquJpwrQ+AU+UW7/Jo/bqKrguj1Hsz31qj2WitRLKYE0XljnBxyLh83CY6tyuzeNR8raZqjXBFCWcCHTwvC1b9wVuGjgeRfnC92zsXUVdE03EuuU5Li4yzMkzODhjicelVlwNf/Erd/qXqeAtH+JW7/UvWGurtROL/AB/Gt/ws5uiaMNDqVM3cGw2LomYEk7ce7csiyWSnSaW02BoJvEDaYAnuA7lVPAWj/Erd/qXo4C0f4lbv9S9PoN2vwm/9It3+U37xi+cCrC1ssdV1kqF9utVQNuvuVaznsdDgMWnaJkdIVerbjmomurpHit9EeCCVFM8VvojwQSmEISyhAWjKiUsqJWRtdrOfJKv0PvGrgHFd5rMfJav0PvGrgX5HqXPy+Tt9N4X92eNB2siRZaxBx/Ru9yU6Btnmlb6t3uVyMrMpUG1HmGtptJP0Qqy1s+Eeoaho2endYOUTy3dEjBg6pOKqYRE5csrrTnrRo6uyb9Co2M5Y4R2wsIlYr9Kl9QvaS2TOGB7xHit5o2oLTUZTrU3Q4hhqiC5kmA8n5wnMO7CFXSWfL03V/wBtUUhW01g0JWsVXgqozEseOTUbvHTvGzuJ1RTgtKUhTFIVpEUpSFMUhVxnSlKpKhXEUIQhMjrPsdtYxkXqzXfuGmGnjTtbOwZk5HIGFr0pXO2ZFd1Ag3RVvbC5zCM9oDZy6VioKhVE0y634Pf0lo9Bni5ciFlWK3VaDi6lULCRBIgyOkEELTW4hcfxpvBcHwTZiOEnjzfvd0YR7Vq32IEkxmSeU8Z7cDgVXv5y23zl3qUvwI/OW2+cu9Sl+Bc/F6Wce9fLp5/VZc2ur4/v9+FjULMGGROV2LxIjPI7V7qsvzltvnLvUpfgR+ctt85d6lL8C26K59u41q/U6/oj7TVWK2Fr01aqzCypXc5piRDBMYibrQteqxmirqKZ4rfRHgglRTPFb6I8FBKQCEsoQFnSolLKiVkGv1lPktX6H22rgqmR6l3Wsh8lq/R+21cJUyPUsOXydvp/H8ri1qs1R+jKnBiSKAfG8NaCY7PBUxYbB5G6s7E1HE9gyVy636edY7JQZTu8LWp3Gl2TAGC86NpxAAyx7FTD9KsFOm0A3RmMsyZ6sVpBwe03WndXxgeAldRou2GhR41OeEGD4ddkfNkDBc+2yAtc4GSCIO8ELO0NpF7HBk8UkEg5SMin2Y+p4bcdrnt+ihpLRtNrxFQ0w9jjm2o0RM7jBB6Hb1ST2kEggggkEHMEYEFXxqLbH17G2o8Ux8o5oFMhwgZkkCJJJPUROKqTX6yilpK1tAgGoKn1jGvPtcURHHbrVa3Ros0VeHLgYFy7OJuvmcIz4PPpWxezRXCOh9Qs4RobIqXrnFvuJAzxfAjJrZkkrV6PdZxe4ZrjxqZETF0F3CDAjjHiQThg6di2lmfom78o2pN7ZwkFt52OfNuqlVh3LARZzfcDw1Phmw8xTvltXgzdx4sPG3EjNS1ujbtOXvDuB4+DzFW608UAQWEh7cTIDmnGCCzn6N4RvEfc4ZhOL8aUtFRrsQQ8C8WkYZgzgVjNdYfkiWn9NZjUANTClwbfjQEnO+112DlUO4RcZ17Vm6M4Rwa+pwZPFMPvNhrDxwRiHO4VoiC2KZM8YLF0u2wimPi7nF/CGZDwLk1YPGGccDPSTE/Ny6TtF3heFSL7pi/g3iObAmXf3jDiMC12Yunxc7R00+K+MbxBf/7mAZMzjZMoHFqZSFU/KWkQsnSJompNEODCAbrsS0/OaHHlNnImDETjJOMrI09A9vvUFw3D2+9C9LNZ3VCQ3MAGN8vazPZyp6gVztXiXDmj2+9ReHNHt96zHaOdMXm5sBOOAqRBykjOd0dK9fyHVvQXMAlokkxLrsDAGcXAYYSCqliawQ8c0fxe9NfHMb/F+JZTdFO+SN9gbUFODOLeEbeF5uwYOxy4hyWVU1drtBLi0cR1QCcYa5oMxlysM5jtWm4lq745jf4vxIvjmN/i/EtqdXarahpvc1rg0OwxwLaxzwn9C7LeFrLXQ4N7mTMRsjMA5dqe4C3xzG/xfiUXxzR/F70qEyMXDmj2+9IpUIDpaZ4rfRHgglLTPFb6I8EEqDRKFEoTCy5USllRKxDX6xnyWr9H7bVw1TI9S7fWI+TVfo/bauIcseTydnp/H8rv1l1VZpKx0aZddexrXsduNwAg9BVGaU1eqUar6TXNqXZBc3BriM7k5iO9X/qrpqlU0bZ7RUqNaG0m06jnGIfT4ju0kSBtkKmdPOYy0Xm1SaIc5zSWuaTjxGkHLCM9yrFPH8yuVbLQWjYt3q3qbpG3AV7PRHB3iOEe9rWS04jE3j2ArnatUSTOatj4PfhJsVmslCx1mVGll+HtALDeqOdBxBB424qqfJl7ad3qdoepZLHTo1QwVLz3uuElsudOZzwhVF8KP/VLR6NL7piuXROtFitbiyjXBfE3XAscZ3BwE5bFQ2uGkW2q32qu0y11Uhp3tYBTa4dBDAe1GPdhixdGV7My/wAPRdUksu3TF0cYPxkQ7FpBgiW4gjA5brZo6D5NVnDGYkcCxp4vCEBxqh772MAgQdmpoRjJbs5V/wBl1MSyM6Q+tkZ7FpIdbB1t0cY8lqDjPLoPJDmMAaw38br+EIvDEXQTPGbr9L17K8zQpPp/K1TDsjTddNIct0Obxwd4umZlebnM/wC1lGVXCdqVxZvpdUVcVcjOsRCynuZjHBHAxAqyeqf/AAsVWkIQhABSlPdMxBndGPckcFg1IQvex0qbr1913AwYkzddAiRmbonZK8CoVxFbRtnoQBw+F7K4cJzdHC47Fh1WgYCIBJG7HCYkwSAO5eYTK4QcZzx61ClCZBChSgBQpUIDoqZ4reoeCglQw8VvUPBQSpMShKhAWTKiUkolZBgawHyar9H7bVxZXZafPk1T6P22rjCseTydfB4/lkWK2GmWgk3A4ujMAlt0uu74juCxdY7VEUg8ObdBBGRnEZ7hh2KCvGtSa7AiUY1eXZpbkrI4MXY2r3NhaDILh2j3L0bRaNnerY2U9mtVQAGSDdLZ2kGPcvMpikKqFqQNqubMOInOCRKDaqn7R3rH3pCkK0iKf41UGVR3ediQ2qp+0dv5RSFKrkZ09Ss92DnuPWSfFIhCZBCEIDMpaTqNrMri7eY1rRhhDW3RI6ljW20uq1H1XRec4uMCBjuC2NLRTXNabzsWg7NoUnRDOe72LBe2lKgLcnRDOe72e5DdDs57vZ7lUpNUEy3TdCM57vZ7kx0Iznu9nuVyk0a9W2hwEcXdi1h8QtqdCs57vZ7lB0Oznu9nuT3CYFLSNVsgFmMTNKk6YmDxmGDicQvN1reSTxcTPIYBj+6GwB0DBbE6JZznexQdFM5zvYjcDWuruII4uO5rR7QF5LanRbecfYlOjW84+xGwy2HijqHgoJRkAOiEpKRiUJZQgljSolLKiVmbC08fJ6n0fttXHFdfp0+T1Po/bauPKw5O7q4PEEt3HvHuSEt3HvHuQUhRGlBLdx7x7khLdx7x7kFIVcZ0Ejce/wDkkJG49/8AJBSFXGdBI3Hv/kkJG49/8kFZ+g9EOtdRzA8MDW3iSJ2gAASN6uIrWkt3HvHuUS3ce8e5dcdRT50Pqv8Amo/MU+dD6v8A5quqIclLdx7x7kS3ce8e5db+Yp86H1f/ADR+Yp86H1f/ADR1QackS3ce8fhSrpdJ6oOo0X1RXDrjbxFwtkDPG8VzScspOis/IZ6DfAJyV52c8RnoN8AmJWKgSpaUhKlpTDKYU5K8mFMSqhAlISpJSEphBKUlBKUlAQSkJUkpCUwglISpJSEoIShLKEwsUqEIWRsDTn6vU+j9tq5AoQseTu6uHxIUhQhKLpCkKlC0jOvMpCpQriK8yum1A/TVv8ofaCEKr2Z1cVnpt+KckZDZ+5K40ONyoZyL+yJhCF43/m9+T8fzXT6jtj/fo1QmWY/PI/hcoLjefjk0dmBQheq5mJrH+qWn/KcquQha4dk10FDkM9EeATFQhQaCpahCAyGJihCqEQpCpQmCFIVKEw8ylKhCAQpShCZEQhCA/9k=",
      gradient: "from-indigo-400 to-cyan-500"
    }
  ];

  return (
    <div id="services"  className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {/* Header Animation */}
          <div 
            className={`flex flex-col text-center w-full mb-20 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              <h1 className="sm:text-5xl text-4xl font-bold title-font mb-6 text-gray-900 relative">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                 My Services
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h1>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600 font-medium">
            Offering a range of frontend services to turn your vision into reality.
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-wrap -m-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`p-4 lg:w-1/3 md:w-1/2 w-full transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className={`h-full flex items-center border border-gray-200 p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden group ${
                    hoveredCard === member.id 
                      ? 'shadow-2xl scale-105 border-transparent' 
                      : 'shadow-lg hover:shadow-xl bg-white/70'
                  }`}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Gradient on Hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative mr-6">
                    <div 
                      className={`w-20 h-20 rounded-full p-1 bg-gradient-to-br ${member.gradient} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <img 
                        alt="team" 
                        className="w-full h-full bg-gray-100 object-cover object-center rounded-full border-2 border-white shadow-lg transition-transform duration-500"
                        src={member.image}
                      />
                    </div>
                    
                    {/* Floating Animation Ring */}
                    <div 
                      className={`absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-50 animate-spin transition-opacity duration-500 ${
                        hoveredCard === member.id ? 'border-blue-400' : 'border-gray-300'
                      }`}
                      style={{ 
                        animationDuration: '3s',
                        transform: 'scale(1.2)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow relative z-10">
                    <h2 
                      className={`text-gray-900 title-font font-bold text-xl mb-2 transition-all duration-300 ${
                        hoveredCard === member.id 
                          ? 'text-gray-800 transform translate-x-1' 
                          : ''
                      }`}
                    >
                      {member.name}
                    </h2>
                    <p 
                      className={`text-gray-500 font-medium transition-all duration-300 ${
                        hoveredCard === member.id 
                          ? 'text-gray-600 transform translate-x-1' 
                          : ''
                      }`}
                    >
                      {member.role}
                    </p>
                    
                    {/* Hover Effect Indicator */}
                    <div 
                      className={`mt-3 h-1 bg-gradient-to-r ${member.gradient} rounded-full transition-all duration-500 ${
                        hoveredCard === member.id ? 'w-20 opacity-100' : 'w-0 opacity-0'
                      }`}
                    ></div>
                  </div>

                  {/* Floating Particles Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  </div>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div 
            className={`mt-20 flex justify-center transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;