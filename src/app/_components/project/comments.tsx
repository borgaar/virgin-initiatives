"use client";

import { useState } from "react";
import { FaceSmileIcon, PaperClipIcon } from "@heroicons/react/20/solid";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { cn } from "../../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { moods } from "../../../lib/moods";

interface ProjectCommentsProps {
  comments: {
    author: string;
    content: string;
    mood: (typeof moods)[number]["value"];
    avatar: string;
  }[];
}

export default function ProjectComments({ comments }: ProjectCommentsProps) {
  return (
    <Card className="mb-64 bg-neutral-500/5 px-6 py-3 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Comments</CardTitle>
        <CardDescription className="text-gray-300">
          Make a difference by sharing your opinions!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CommentsList comments={comments} />
        <AddComment />
      </CardContent>
    </Card>
  );
}

function CommentsList({ comments }: ProjectCommentsProps) {
  return (
    <div className="space-y-4">
      {comments.map((c) => (
        <Comment {...c} key={c.content} />
      ))}
    </div>
  );
}

function Comment({
  author,
  content,
  mood,
  avatar,
}: ProjectCommentsProps["comments"][number]) {
  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <img
          alt={author}
          src={avatar}
          className="inline-block size-10 rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-bold text-white">{author}</h3>
          {Boolean(mood) && (
            <span
              className={cn(moods.find((m) => m.value === mood)!.text)}
            >{` is feeling ${mood}`}</span>
          )}
        </div>
        <p className="mt-1 text-gray-200">{content}</p>
      </div>
    </div>
  );
}

function AddComment() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="rounded-lg bg-black text-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Add your comment..."
              className="block w-full resize-none bg-black px-6 py-3 text-base text-gray-100 placeholder:text-gray-300 focus:outline focus:outline-0 sm:text-sm/6"
              defaultValue={""}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div aria-hidden="true" className="py-2">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-200 hover:text-gray-500"
                >
                  <PaperClipIcon aria-hidden="true" className="size-5" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flex items-center bg-black">
                <Listbox value={selected} onChange={setSelected}>
                  <Label className="sr-only">Your mood</Label>
                  <div className="relative">
                    <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-200 hover:text-gray-500">
                      <span className="flex items-center justify-center">
                        {selected.value === null ? (
                          <span>
                            <FaceSmileIcon
                              aria-hidden="true"
                              className="size-5 shrink-0"
                            />
                            <span className="sr-only">Add your mood</span>
                          </span>
                        ) : (
                          <span>
                            <span
                              className={cn(
                                selected.bgColor,
                                "flex size-8 items-center justify-center rounded-full",
                              )}
                            >
                              <selected.icon
                                aria-hidden="true"
                                className="size-5 shrink-0 text-white"
                              />
                            </span>
                            <span className="sr-only">{selected.name}</span>
                          </span>
                        )}
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      {moods.map((mood) => (
                        <ListboxOption
                          key={mood.value}
                          value={mood}
                          className="cursor-default select-none bg-white px-3 py-2 data-[focus]:relative data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                mood.bgColor,
                                "flex size-8 items-center justify-center rounded-full",
                              )}
                            >
                              <mood.icon
                                aria-hidden="true"
                                className={cn(
                                  mood.iconColor,
                                  "size-5 shrink-0",
                                )}
                              />
                            </div>
                            <span className="ml-3 block truncate font-medium">
                              {mood.name}
                            </span>
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
