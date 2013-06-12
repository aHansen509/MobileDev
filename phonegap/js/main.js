$(document).ready( function(){
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        var url = '<a href="http://maps.google.com/maps?sadder=' + lat + ',' + lng + '&daddr=Spokane+Community+Clg+1810+N,+North+Greene+Street,+Spokane,+WA&hl=en">Your Location</a>';

        var map = '<iframe width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=d&amp;source=s_d&amp;saddr=' + lat + ',' + lng + '&amp;daddr=Spokane+Community+Clg+1810+N,+North+Greene+Street,+Spokane,+WA&amp;hl=en&amp;t=m&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=d&amp;source=embed&amp;saddr=47.688435,-117.395016&amp;daddr=Spokane+Community+Clg+1810+N,+North+Greene+Street,+Spokane,+WA&amp;hl=en&amp;geocode=FfOq1wIduLEA-Q%3BFZh21wIdijIB-SEsAiaRK0tT2CkrxFtBSh-eVDEsAiaRK0tT2A&amp;aq=&amp;sll=47.680846,-117.380893&amp;sspn=0.024588,0.04931&amp;mra=ls&amp;ie=UTF8&amp;ll=47.680038,-117.380161&amp;spn=0.016783,0.03301&amp;t=m" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
    });

    $('.order').on("click", function(event) {

    })
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    function onSuccess(contact) {
        alert("Save Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    var phoneNum = new ContactField('work', '509-555-5555', true);
    var myContact = navigator.contacts.create({"displayName": "NomNom Pizza", "phoneNumbers": phoneNum });
    myContact.save(onSuccess,onError)
}

