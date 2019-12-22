chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "showPageAction") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.pageAction.show(tabs[0].id);

            function hasOneDayPassed(){
                var date = new Date().toLocaleDateString();

                if (localStorage.yourapp_date == date) {
                    return false;
                }
                else {
                    localStorage.yourapp_date = date;
                    return true;
                }
              }


            function runOncePerDay() {
                if (hasOneDayPassed()) {


                    setTimeout(function () {

                            window.open('https://docs.google.com/forms/d/e/1FAIpQLSehEtVWPejQwe79eqdAOkdD1wjtyuKPKi3_cjwBPSv5O4oCnA/viewform',
                            'popUpWindow','height=700,width=400,left=900,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');

                    }, 1000);
                }
            }
            runOncePerDay();

        });
    }
});
