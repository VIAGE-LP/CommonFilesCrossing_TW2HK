jQuery(function($){
    function addGAToCookie() {
        // console.log('ga test start!')
        let ga1 = $("#lp_param_ga1").val()
        let ga2 = $("#lp_param_ga2").val()
        let ga3 = $("#lp_param_ga3").val()
        $('#lp_form').submit(function(event) {
            if ( ga1 !== null) {
                document.cookie = 'acs_ga1=' + ga1 + '; path=/';
            }
            if ( ga2 !== null) {
                document.cookie = 'acs_ga2=' + ga2 + '; path=/';
            }
            if ( ga3 !== null) {
                document.cookie = 'acs_ga3=' + ga3 + '; path=/';
            }
            
        })
    }

    window.onload = function(){
        addGAToCookie()
    }
})