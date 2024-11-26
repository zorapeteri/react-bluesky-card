/* eslint-disable no-cond-assign, no-plusplus, no-useless-escape, no-param-reassign */

import React, { useEffect } from 'react';
import globalClassName from 'utils/globalClassName';

function getGroups(str: string, regex: RegExp, index: number) {
  let m;
  const results = [];

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    if (m.length > 1) {
      results.push(m[index]);
    }
  }

  return results;
}

function findUsernames(str: string) {
  const regex = /([^a-zA-Z0-9._]|^)(@([a-zA-Z0-9._]+))/gm;
  return getGroups(str, regex, 3);
}

function findLinks(str: string) {
  const regex =
    /((\s|^)((((http|ftp|https):\/\/)*)([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])))/gm;
  return getGroups(str, regex, 3);
}

function findHashtags(str: string) {
  const regex = /([\s\W]|^)#(\w+)/gm;
  return getGroups(str, regex, 2);
}

function replaceLinks(str: string) {
  let finalStr = str;
  const links = findLinks(str);
  links.forEach((link) => {
    finalStr = finalStr.replace(
      link,
      `<a target="_blank" class="${globalClassName(
        'link-in-post'
      )}" href="${link}">${link}</a>`
    );
  });
  return finalStr;
}

function replaceUsernames(str: string) {
  let finalStr = str;
  const usernames = findUsernames(str);
  usernames.forEach((username) => {
    finalStr = finalStr.replace(
      `@${username}`,
      `<a 
        target="_blank" 
        class="${globalClassName('username-in-post')}" 
        href="https://bsky.app/profile/${username}">
          @${username}
      </a>`
    );
  });
  return finalStr;
}

function replaceHashtags(str: string) {
  let finalStr = str;
  const hashtags = findHashtags(str);
  hashtags.forEach((hashtag) => {
    finalStr = finalStr.replace(
      `#${hashtag}`,
      `<a 
        target="_blank" 
        class="${globalClassName('hashtag-in-post')}"
        href="https://bsky.app/hashtag/${hashtag}"
      >
        #${hashtag}
      </a>`
    );
  });
  return finalStr;
}

function replaceLinksUsernamesHashtags(el: HTMLElement) {
  const linksReplaced = replaceLinks(el.textContent || '');
  const usernamesReplaced = replaceUsernames(linksReplaced);
  const hashtagsReplaced = replaceHashtags(usernamesReplaced);
  el.innerHTML = hashtagsReplaced;
}

const useLinksUsernamesHashtags = ({
  ref,
  text,
}: {
  ref: React.RefObject<HTMLElement>;
  text: string;
}) => {
  useEffect(() => {
    if (ref?.current) {
      replaceLinksUsernamesHashtags(ref.current);
    }
  }, [ref, text]);
};

export default useLinksUsernamesHashtags;
