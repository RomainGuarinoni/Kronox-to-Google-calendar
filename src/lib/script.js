const generateScript = () => `(function () {
    const body = document.body;
  
    const table = body.getElementsByTagName('table')[0];
  
    const courseTitle = table
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0]
      .getElementsByTagName('td')[1]
      .getElementsByTagName('table')[0]
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[1]
      .getElementsByTagName('td')[0]
      .getElementsByTagName('table')[0]
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0]
      .getElementsByTagName('td')[1]
      .getElementsByTagName('font')[0]
      .getElementsByTagName('font')[0]
      .innerHTML.trim();
  
  
    const elements = [
      ...Array.from(table.getElementsByClassName('data-white')),
      ...Array.from(table.getElementsByClassName('data-grey')),
    ];
  
    const result = [];
  
    elements.forEach((el, index) => {
      result.push({
        date: el.childNodes[3].getElementsByTagName('font').length
          ? el.childNodes[3].getElementsByTagName('font')[1].innerHTML
          : el.classList.contains('data-white')
          ? document
              .getElementsByClassName('data-grey')
              [index - 1].childNodes[3].getElementsByTagName('font')[1].innerHTML
          : document
              .getElementsByClassName('data-white')
              [index - whiteCells].childNodes[3].getElementsByTagName('font')[1]
              .innerHTML,
        start: el.childNodes[4]
          .getElementsByTagName('font')[1]
          .innerHTML.split('-')[0],
        end: el.childNodes[4]
          .getElementsByTagName('font')[1]
          .innerHTML.split('-')[1],
        room: el.childNodes[8].getElementsByTagName('font')[1].innerHTML,
      });
    });

    const query = new URLSearchParams({
      courseTitle,
      courses:JSON.stringify(result)
    });

    const url = "${window.location.href.split('?')[0]}"+"?"+query.toString();

    window.location.href=url;
  
  
  })();
  `;

export default generateScript;
