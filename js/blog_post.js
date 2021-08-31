const GARBAGE_CODE = "garbage";
const KNITTING_CODE = "knitting";
const GOLF_CODE = "golf";
const PAINT_CODE = "paint";
const GROCERY_CODE = "grocery";
const LAUNDRY_CODE = "laundry";

const GARBAGE_TITLE = "I Took My Garbage Down to the Street";
const KNITTING_TITLE = "Friday Night Knitting";
const GOLF_TITLE = "Watching Golf";
const PAINT_TITLE = "Look at that Paint Dry";
const GROCERY_TITLE = "Grocery Grabbin'";
const LAUNDRY_TITLE = "Texas Fold 'Em";

function loadContent() {
  var title = getParameterByName('post');
  setPostTitle(title);
  setPostImage(title);
  setPostContent(title);
  setOtherPosts(title);
}

// Code for this method found on Stack Overflow
// I needed something to pass a parameter from the index page to the blog post page, denoting which of the 6 articles were selected
function getParameterByName(name, url) {
  if (!url)
    url = window.location.href;

  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);

  if (!results)
    return null;

  if (!results[2])
    return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function setPostTitle(title) {
  var heading = document.getElementById('post_title');

  if (title == GARBAGE_CODE)
    heading.innerHTML = GARBAGE_TITLE;
  else if (title == KNITTING_CODE)
    heading.innerHTML = KNITTING_TITLE;
  else if (title == GOLF_CODE)
    heading.innerHTML = GOLF_TITLE;
  else if (title == PAINT_CODE)
    heading.innerHTML = PAINT_TITLE;
  else if (title == GROCERY_CODE)
    heading.innerHTML = GROCERY_TITLE;
  else if (title == LAUNDRY_CODE)
    heading.innerHTML = LAUNDRY_TITLE;
}

function setPostImage(title) {
  var img = document.getElementById('post_image');

  if (title == GARBAGE_CODE)
    img.src = "images/garbage_day.jpg";
  else if (title == KNITTING_CODE)
    img.src = "images/knitting.jpg";
  else if (title == GOLF_CODE)
    img.src = "images/watching_golf.jpg";
  else if (title == PAINT_CODE)
    img.src = "images/painting.jpg";
  else if (title == GROCERY_CODE)
    img.src = "images/grocery_shopping.jpg";
  else if (title == LAUNDRY_CODE)
    img.src = "images/laundry.jpg";
}

function setPostContent(title) {
  var para = document.getElementById('post_content');

  if (title == GARBAGE_CODE)
    para.innerHTML = "It was Monday morning, garbage day. I overslept a little bit because I was up until 11 P.M. doing chess lessons. So I had to hurry down and get out of my robe and get dressed. I'm kind of embarrassed to walk outside in my robe. I really should have filled the garbage and recycling cans the night before. They were mostly full but I hate leaving empty, unused space. So I foraged around my garage looking for things to throw out. Luckily the kids were still asleep so I could throw out some of their junky old toys. They won't even notice they are gone, but if I had told them I was going to throw the toys out they would protest incessantly. I still had some room, so I went through some of wifey's momentos in the garage. I probably shouldn't throw this out but it looks like garbage. Hey, there are some Amazon boxes I can toss. I wish she wouldn't buy so much stuff off Amazon. Why do her parents give us all of their old garbage? Is decorative grass really worth handing down? <br><br> I like when the garbage can lids are slightly pushed upwards because they are full. Not too much to arouse the suspicion of the garbage collectors, but enough where I feel like I'm getting some extra bang for my buck. I put my gloves on and start hauling the cans down the driveway. I have to walk through the grass a bit because the cars are parked in the driveway. I need to cut the grass. I'm not sure how it got this long during a drought, but here we are. I finally made it to the bottom of the driveway and placed the cans. I leave a little space between them as a courtesy to the collectors. How can the garbage truck robot arms grab a single can if they are too close together? All of a sudden I see a car approaching. I didn't recognize this car and as it got closer I realized I didn't recognize the driver either. They waved as they drove by, but I really didn't trust the wave. Was this really someone who just moved into the neighborhood. I guess I haven't been here that long, maybe I had just never seen them before. They were probably on their way to work.";
  else if (title == KNITTING_CODE)
    para.innerHTML = "It was Friday night so I decided it was time to kick things up a notch. I was already two hot cocoas down and decided to check with both of my friends. They were playing Warcraft as usual. Demetrius was pretty pumped because he obtained the Cloak of Invicibility. Anyway I asked them if they were ready to raise the roof to let the dogs out. Jeffrey was confused, then nervous and assured me he couldn't be out past 10 P.M. I told him I couldn't make any guarantees...<br><br>The guys soon showed up and I got out the needles and some bundles of yarn. Normally I try to make baby hats and blankets, but I was in party mode tonight. Now was the time to make a bad ass sweater. I decided I would put something racy on it. It would say 'eat my shorts' to show my tough guy demeanor. I'm actually pretty good with a bow staff too, which is why local gangs are trying to recruit me. Anyway I didn't quite get the sweater to come out right. The arms weren't sized right. Maybe this is because I've upped my daily pushups from 4 to 7 though. Got anywhere I can cage these pythons? Demetrius and Jeffrey were making scarves that were pretty wimpy so I told them so. I was pretty sure I could take them both, but Jeffrey took a cheap shot and pushed me into a lamp when I wasn't ready. I ended up winning the fight though when I caught him with a pretty nasty scratch. I'm pretty sure he'll need a band-aid for that. I hope he doesn't tell my mom.";
  else if (title == GOLF_CODE)
    para.innerHTML = "I've got 57 channels and nothing's on. At least I thought so until I flipped to a channel with golf on it. Boy has my afternoon changed. Someone just made a 20 foot putt. There were a lot of people clapping, but I've done that at putt putt before and there was even a giant clown trying to block me. I've been laughed at a lot, but nobody has ever clapped for me. I wonder if Tiger Woods started with putt putt or if he just went right into real golf.";
  else if (title == PAINT_CODE)
    para.innerHTML = "I really like this sonic silver paint that I selected for the walls. It's made by Dutch Boy and I bought a lot of it from Menards. I think I have too much actually and, for what it cost me, I better find some other things to paint gray too. I don't think the lady who sold me the paint likes her job very much. And apparently that's my fault. Passive agressive much, lady?<br><br>The paint is really going on now, but maybe I should slow down so that I don't dribble so much. I hate getting it on the floor. I hated getting it on my hands too before I started wearing latex gloves. I've got all different sized brushes now so I can get all areas. I especially don't like missing the areas where the walls and ceiling meet.";
  else if (title == GROCERY_CODE)
    para.innerHTML = "I'm low on kale again so you know what that means. Time for the grocery store! Ours is called Cub Foods. That's an odd name for a store. But I suppose it's not as bad as others I've seen during my travels across America. Down south for example they have one called the Piggly Wiggly. It's hard to take a store seriously with a name like that. Can I really trust the eggs at a place like that, you know?";
  else if (title == LAUNDRY_CODE)
    para.innerHTML = "Today is laundry day. By that I mean I can't go another day without having semi-clean clothes. I don't care for laundry, but it's better than when I used to have to go to the laundromat. I never had enough quarters and it seemed like it would keep getting more expensive. Come on, how much can you charge for a single wash cycle. And don't get me started on the dryers. A single run of those wouldn't even dry your clothes. I thought about building a clothes line for my clothes to dry outside but I was afraid people would see my underwear.";
}

function setOtherPosts(title) {
  const titlesSet = new Set([GARBAGE_TITLE, KNITTING_TITLE, GOLF_TITLE, PAINT_TITLE, GROCERY_TITLE, LAUNDRY_TITLE]);

  for (let elem of titlesSet) {
      if (title == GARBAGE_CODE && elem == GARBAGE_TITLE)
        titlesSet.delete(elem);
      else if (title == KNITTING_CODE && elem == KNITTING_TITLE)
        titlesSet.delete(elem);
      else if (title == GOLF_CODE && elem == GOLF_TITLE)
        titlesSet.delete(elem);
      else if (title == PAINT_CODE && elem == PAINT_TITLE)
        titlesSet.delete(elem);
      else if (title == GROCERY_CODE && elem == GROCERY_TITLE)
        titlesSet.delete(elem);
      else if (title == LAUNDRY_CODE && elem == LAUNDRY_TITLE)
        titlesSet.delete(elem);
  }

  var index = 1;
  for (let elem of titlesSet) {
    var divName = 'other_post_' + index;
    var hrefVal = 'blog_post.html?post=' + getPostCodeFromTitle(elem);
    document.getElementById(divName).innerHTML = '<a href="' + hrefVal + '">' + elem + '</a>';
    index++;
  }
}

function getPostCodeFromTitle(postTitle) {
  if (postTitle == GARBAGE_TITLE)
    return GARBAGE_CODE;
  else if (postTitle == KNITTING_TITLE)
    return KNITTING_CODE;
  else if (postTitle == GOLF_TITLE)
    return GOLF_CODE;
  else if (postTitle == PAINT_TITLE)
    return PAINT_CODE;
  else if (postTitle == GROCERY_TITLE)
    return GROCERY_CODE;
  else if (postTitle == LAUNDRY_TITLE)
    return LAUNDRY_CODE;
}
