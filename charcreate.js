let alias;
let age;
let job;
let affinity;
let gender;
let health;
let maxhealth;
let magic;
let maxmagic;


function greeting()
{
    alert("\nHello adventurer, My name is Developer...or Dev for short. \n\n I have been programmed to assist your journey.");
    alert("\nLet us create an avatar for you...together.");
    alert("\nWe shall begin with your name, what do they call you in your dreams:");
    alias = prompt("","Dreamer");
    alert("\nAh what an interesting name...")
    alert("\nI can hear them chanting your name for all eternity now..." + alias + "...");
    age = Number(prompt("\nHow many years have passed since your birth " + alias + "...?"));
    alert("\n" + age + " ?!...That is surprising, you do not look a day over " + Math.floor(age/1.5) + ".");
}

function pickjob()
{
    alert(`\nOkay ${alias}, next we will assign you to a job. \n\n Which sounds best to you?`);
    job = prompt("\nPick a job type: \n\n Currently available: Knightt, Roughe, Maayge");
    if (job === "Knightt" || job === "Roughe" || job === "Maayge")
        {
            alert(job);
            if (job == "Knightt")
                {
                    alert("\nThe Knightt is the armor that protects and the sword that swings just.");
                    alert("\nWho is mighty enough to face you head on...? No one.")
                }
                else if (job == "Roughe")
                    {
                        alert("\nSolstice in the shadows, you take what you need and care only of yourself.");
                        alert("\nBurn every bridge, friends are just easy prey while stranger's wallets fall victim to your savagery.");
                    }
                else if (job == "Maayge")
                    {
                        alert("\nPracticer of elemental manipulation and a pretty effecient bookworm.");
                        alert(`\nWhen you say rain...the skies ask one question in return "How much would you like master."`);
                    }
            if(confirm("\nAre you still sure you wish to be a " + job + "?"))
                {

                }
                else
                    {
                        pickjob();
                        return;
                    }
        }
        else
        {
            pickjob();
            return;
        }
}


greeting();
pickjob();