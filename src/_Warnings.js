var WARNINGS = {
  warnings: [
    { keyword: 'just',
      source:  'http://www.taramohr.com/8-ways-women-undermine-themselves-with-their-words/',
      message: '"Just" demeans what you have to say. "Just" shrinks your power. ' +
               'It\'s time to say goodbye to the justs. --Tara Sophia Mohr', },
    { keyword: 'actually',
      source:  'http://www.taramohr.com/8-ways-women-undermine-themselves-with-their-words/',
      message: '"Actually" communicates a sense of surprise that you have ' +
               'something to say. Of course you want to add something. Of ' +
               'course you have questions. There\'s nothing surprising about ' +
               'it.  --Tara Sophia Mohr', },
    { keyword: 'sorry',
      source:  'http://www.fastcompany.com/3032112/strong-female-lead/sorry-not-sorry-why-women-need-to-stop-apologizing-for-everything',
      message: 'Using "sorry" frequently undermines your gravitas and makes you ' +
               'appear unfit for leadership. --Sylvia Ann Hewlett', },
    { keyword: 'apologize|apologies|forgive',
      source:  'http://www.fastcompany.com/3032112/strong-female-lead/sorry-not-sorry-why-women-need-to-stop-apologizing-for-everything',
      message: 'Apologizing unnecessarily puts you in a subservient position and ' +
               'makes people lose respect for you --Bonnie Marcus', },
    { keyword: 'I think|We think',
      source:  'http://www.fastcompany.com/3049609/the-future-of-work/4-types-of-useless-phrases-you-need-to-eliminate-from-your-emails',
      message: '"I think" undermines your idea and displays an overall lack of ' +
               'self-confidence. --Lydia Dishman', },
    { keyword: 'I\'m no expert|We\'re no expert',
      source:  'http://www.fastcompany.com/3049609/the-future-of-work/4-types-of-useless-phrases-you-need-to-eliminate-from-your-emails',
      message: '"I\'m no expert" undermines your idea and displays an overall ' +
              'lack of self-confidence. --Lydia Dishman', },
    { keyword: 'Yes, but',
      source:  'http://www.strategicserendipityforlife.com/documents/Articles/Communication_8TipsForFearlessCommunicationInTheWorkplace.pdf',
      message: 'The "Yes, but" syndrome is entirely counterproductive, particularly in a work setting. ' +
               'You will become an integral part of any team if you are willing ' +
               'to build ideas rather than discard them. --Victoria Simon, Ph.D. and Holly Pedersen, Ph.D.', },
    { keyword: 'literally',
      source:  'https://expresswriters.com/50-weak-words-and-phrases-to-cut-out-of-your-blogging/',
      message: 'If something is literal, your readers should know it without you needing to use this word to clarify it. ' +
               'More often than not, the word "literally" makes writing sound flabby and juvenile, ' +
               'which is probably not what you\'re going for. --Julia McCoy', },
    { keyword: 'very',
      source:  'http://blog.crew.co/5-weak-words-to-avoid/',
      message: 'The word \'very\' does not communicate enough information. Find a stronger, more meaningful adverb, or omit it completely. --Andrea Ayres', },
    { keyword: 'kind of|sort of',
      source:  'http://www.strategicserendipityforlife.com/documents/Articles/Communication_8TipsForFearlessCommunicationInTheWorkplace.pdf',
      message: 'This qualifier weakens the message as well as the authority of the writer. --Victoria Simon, Ph.D. and Holly Pedersen, Ph.D.',
    },
    { keyword: 'does that make sense',
      source:  'http://goop.com/how-women-undermine-themselves-with-words/',
      message: '"does that make sense" comes across either as condescending ' +
               '(like your audience can\'t understand) or it implies you feel ' +
               'you\'ve been incoherent. A better way to close is something like ' +
               '"I look forward to hearing your thoughts." You can leave it up ' +
               'to the other party to let you know if they are confused about ' +
               'something, rather than implying that you "didn\'t make sense." ' +
               '--Tara Sophia Mohr', },
    { keyword: 'try|trying',
      source:  'http://www.lifehack.org/articles/communication/7-things-not-to-say-and-7-things-to-start-saying.html',
      message: '"Do or do not. There is no try." --Yoda' },
    { keyword: 'I should',
      source:  'http://www.lifehack.org/articles/communication/7-things-not-to-say-and-7-things-to-start-saying.html',
      message: 'The word "should" is inherently negative. "Should" implies a lose: lose ' +
               'situation and it\'s just not conducive to positive outcomes in life. ' +
               'It\'s a form of criticism, and it\'s best left out of your everyday language. ' +
               'Instead of beating yourself up for what you should have done, ' +
               'focus on what you have the power to change. ' +
               '-- Zoe B', },
    { keyword: 'I feel',
      source:  'http://www.freelancewriting.com/articles/ten-words-to-avoid-when-writing.php',
      message: 'If you write an opinion, the reader understands that you also ' +
               'believe it is right. ' +
	             '--David Bowman', },
    { keyword: 'I believe',
      source:  'https://hbr.org/2011/12/replace-meaningless-words-with',
      message: 'Phrases containing "we believe," "we think," and "we feel" pervade ' +
               'presentation narratives to such a degree that they spill over into ' +
               'sentences where caution is unnecessary. ' +
               '--Jerry Weissman', },
    { keyword: 'I\'m just saying',
      source:  'http://101books.net/2012/03/02/7-annoying-words-that-should-die-a-horrible-death/',
      message: 'I think what you\'re saying is that you said something. If ' +
               'you\'re using it to mitigate something that may be offensive or ' +
               'embarrassing, then don\'t say it. Say something else. Otherwise, ' +
               'say what you\'re saying without the "just saying." We already ' +
               'know you\'re saying it... after all, you just said it! ' +
               '--Robert Bruce', },
    { keyword: 'In my opinion',
      source:  'https://preciseedit.wordpress.com/2009/06/19/in-my-opinion-i-think-that-i-believe-this-is-bad-writing/',
      message: 'Phrases such as "in my opinion," "I think that," and "I believe" create three problems for writers: ' +
               '1. They delay the writer\'s message; ' +
               '2. They demonstrate insecurity; and ' +
               '3. They tell the reader what he already knows. Remove that phrase, or any similar phrase, ' +
               'and get to the point. --David Bowman', },
    { keyword: 'let me know',
      source:  'http://www.inc.com/geoffrey-james/5-words-smart-entrepreneurs-never-use.html?cid=em01011week16day21a',
      message: '“Let me know” is vague and ineffective at encouraging a response. A Carnegie Mellon study found that'+
      ' people are more likely to respond to email requests that are concise and easy to answer as opposed to vague'+
      ' or open-ended requests. Be more specific in your wording. – Inc.com', },
    { keyword: 'teach',
      source:  'http://www.inc.com/geoffrey-james/5-words-smart-entrepreneurs-never-use.html?cid=em01011week16day21a',
      message: 'Consider replacing the word “teach” with “share.” Teach conjures up images of a teacher droning on'+
      ' while share implies that what you’ve got is valuable enough to keep to yourself – Inc.com', },
    { keyword: 'learn',
      source:  'http://www.inc.com/geoffrey-james/5-words-smart-entrepreneurs-never-use.html?cid=em01011week16day21a',
      message: 'Learning is something that takes time and energy and may dissuade prospects from completing a specific'+
      ' call to action like attending a webinar or sales presentation. Use the word “discover” instead. '+
      '“In this session you will discover…” –Inc.com', },
    { keyword: 'details',
      source:  'http://www.inc.com/geoffrey-james/5-words-smart-entrepreneurs-never-use.html?cid=em01011week16day21a',
      message: 'Try replacing “details” with another word. Details are often trivial and unimportant. '+
      'Can you use the word “insights” instead? – Inc.com', },
    { keyword: 'case study',
      source:  'http://www.inc.com/geoffrey-james/5-words-smart-entrepreneurs-never-use.html?cid=em01011week16day21a',
      message: 'Case studies sound academic and boring. Can you replace this with “success stories” instead? –'+
      ' Inc.com', },
    { keyword: 'case studies',
      source:  'http://www.inc.com/geoffrey-james/5-words-smart-entrepreneurs-never-use.html?cid=em01011week16day21a',
      message: 'Case studies sound academic and boring. Can you replace this with “success stories” instead? –'+
      ' Inc.com', },


  ],
};
