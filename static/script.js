'use strict';

function editProfile(){
    $("#editProfile").click(function(){
        $("p.ans").addClass('hidden');
        $("h4.bio").append(
            `<textarea class="reg" id="bio" rows="5" cols="60" name="bio" style="text-align: left; height:200px;" type="text" placeholder="I am a high school senior interested in web applications. I love to play sports, specifically football, and also love to travel! I often do small coding projects to expand my knowledge."></textarea>`
        );
        $("h4.interests").append(
            '<input value="bio" class="reg interest" name="interest1" type="text" placeholder="Football" ><input class="reg interest" name="interest2" placeholder="Travel" type="text"> <input class="reg interest" name="interest3" placeholder="Web apps" type="text"><input class="reg interest" name="interest4" placeholder="Community Service" type="text">'
        );
        $("h4.skills").append(
            `<table>
            <tr>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="design" name="design" value="design">
                        <label for="design"> Design</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="html" name="html" value="html">
                        <label for="html"> HTML/CSS</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="C" name="C" value="C">
                        <label for="C"> C</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="react" name="react" value="react">
                        <label for="react"> React</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="java" name="java" value="java">
                        <label for="java"> Java</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="node" name="node" value="node">
                        <label for="node"> Node</label>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="linux" name="linux" value="linux">
                        <label for="linux"> Linux</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="sql" name="sql" value="sql">
                        <label for="sql"> SQL</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="mongodb" name="mongodb" value="mongodb">
                        <label for="mongodb"> MongoDB</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="js" name="js" value="js">
                        <label for="js"> Javascript</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="jquery" name="jquery" value="jquery">
                        <label for="jquery"> JQuery</label>
                    </div>
                </td>
                <td>
                    <div style="white-space: nowrap;">
                        <input type="checkbox" id="Cplusplus" name="Cplusplus" value="Cplusplus">
                        <label for="Cplusplus"> C++</label>
                    </div>
                </td>
                <tr>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="ruby" name="ruby" value="ruby">
                            <label for="ruby"> Ruby</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="go" name="go" value="go">
                            <label for="go"> Go</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="Csharp" name="Csharp" value="Csharp">
                            <label for="Csharp"> C#</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="PHP" name="PHP" value="PHP">
                            <label for="PHP"> PHP</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="bash" name="bash" value="bash">
                            <label for="bash"> Bash/Shell/PowerShell</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="swift" name="swift" value="swift">
                            <label for="swift"> Swift</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="python" name="ruby" value="python">
                            <label for="python"> Python</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="typescript" name="typescript" value="typescript">
                            <label for="typescript"> TypeScript</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="visualBasic" name="visualBasic" value="visualBasic">
                            <label for="visualBasic"> Visual Basic</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="objC" name="objC" value="objC">
                            <label for="objC"> Objective-C</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="perl" name="perl" value="perl">
                            <label for="perl"> Perl</label>
                        </div>
                    </td>
                    <td>
                        <div style="white-space: nowrap;">
                            <input type="checkbox" id="AI" name="AI" value="AI">
                            <label for="AI"> ML/AI</label>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`
        );
        $("h4.location").append(
            `<input name="location" class="reg" placeholder="San Fransico, CA" type="text" maxlength="50">`
        )
        $("h4.phone").append(
            `<input name="phone" class="reg"  placeholder="415-888-9574" type="text">`
        );
        $("h4.email").append(
            `<input name="email" class="reg"  placeholder="johndoe@gmail.com" type="text">`
        )
        $("h4.other").append(
            `<textarea rows="5" cols="60" class="reg"  name="info" placeholder="Github: johndoe - Portfolio: http://johndoe.com" type="text"></textarea>`
        )
    })
};

function changeBtn(){
    $("#editProfile").click(function(){
        $("#editProfile").addClass("hidden")
        $("#submitProfile").removeClass("hidden");
    })};

function onSubmit(){
    $("#submitProfile").click(function(){
        $(".reg, table").addClass("hidden")
        $("p.ans").removeClass("hidden");
        $("#editProfile").removeClass("hidden")
        $("#submitProfile").addClass("hidden");
    })};

    function setValues(){
        var bio = document.getElementById("bio");
        var biovalue = bio.val("hey")
        console.log(biovalue)
    }


       /* $("h4.bio").prepend(
            `<div>
                <div class="section">
                <h4 class="sub purple bio" >Bio:</h4>
                <p class="ans">{{row["bio"]}}</p>
                <br>  
            </div>

                <div class="section">
                <h4 class="sub red interests">Interests:</h4>
                <p class="ans" >{{row["interests"]}}</p>
                <br></div>

                <div class="section">

                <h4 class="sub pink skills" >Skills:</h4>
                <p class="ans" >{{row["skills"]}}</p>
                <br>
                </div>

                <div class="section">
                <h4 class="sub green location">Location:</h4>
                <p class="ans"> {{row["location"]}}</p>
                <br>    
                </div>


                <div class="section">
                <h4 class="sub blue phone">Phone #:</h4>
                <p class="ans">{{row["phone"]}}</p>
                <br>
            </div>

                <div class="section">
                <h4 class="sub yellow email">Email:</h4>
                <p class="ans">{{ row["email"] }}</p> 
            {% if row["info"] != None %}<br>
        </div>

            <div class="section">
                    <h4 class="sub orange other">Other Contacts:</h4>
                    <p class="ans">{{row["info"]}}</p>`
        )*/

        editProfile();
        changeBtn();
        onSubmit();
        setValues();

