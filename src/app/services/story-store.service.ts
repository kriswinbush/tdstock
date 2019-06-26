import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


interface Story {
  id?: string,
  title: string,
  symbol: string,
  summary: string,
  storyFiles: File | FileList | string
}

@Injectable({
  providedIn: 'root'
})
export class StoryStoreService {

  initialStoryState: Story[] = [
    {
      title: "Direct trade authentic pok",
      symbol: "GOOG",
      summary: "Direct trade authentic pok pok bitters, brunch wayfarers cronut roof party thundercats pickled tumeric portland +1 enamel pin. VHS offal pug readymade, lomo bushwick activated charcoal ethical pork belly blue bottle paleo PBR&B. Humblebrag waistcoat roof party kinfolk kitsch lomo, put a bird on it godard authentic hell of forage cronut. Kale chips affogato cloud bread YOLO activated charcoal squid whatever. Pour-over DIY fam mustache affogato kitsch. Helvetica PBR&B freegan microdosing food truck. Food truck helvetica DIY, hexagon brooklyn pabst tote bag seitan gluten-free.",
      storyFiles: "https://placekitten.com/g/200/200"
    },
    {
      title: "Mumblecore typewriter.",
      symbol: "AAPL",
      summary: "Direct trade authentic pok pok bitters, brunch wayfarers cronut roof party thundercats pickled tumeric portland +1 enamel pin. VHS offal pug readymade, lomo bushwick activated charcoal ethical pork belly blue bottle paleo PBR&B. Humblebrag waistcoat roof party kinfolk kitsch lomo, put a bird on it godard authentic hell of forage cronut. Kale chips affogato cloud bread YOLO activated charcoal squid whatever. Pour-over DIY fam mustache affogato kitsch. Helvetica PBR&B freegan microdosing food truck. Food truck helvetica DIY, hexagon brooklyn pabst tote bag seitan gluten-free.",
      storyFiles: "https://placekitten.com/g/200/200"
    },
    {
      title: "Iceland post-ironic",
      symbol: "BABA",
      summary: "Direct trade authentic pok pok bitters, brunch wayfarers cronut roof party thundercats pickled tumeric portland +1 enamel pin. VHS offal pug readymade, lomo bushwick activated charcoal ethical pork belly blue bottle paleo PBR&B. Humblebrag waistcoat roof party kinfolk kitsch lomo, put a bird on it godard authentic hell of forage cronut. Kale chips affogato cloud bread YOLO activated charcoal squid whatever. Pour-over DIY fam mustache affogato kitsch. Helvetica PBR&B freegan microdosing food truck. Food truck helvetica DIY, hexagon brooklyn pabst tote bag seitan gluten-free.",
      storyFiles: "https://placekitten.com/g/200/200"
    },
    {
      title: "Salvia gochujang",
      symbol: "GOOG",
      summary: "Direct trade authentic pok pok bitters, brunch wayfarers cronut roof party thundercats pickled tumeric portland +1 enamel pin. VHS offal pug readymade, lomo bushwick activated charcoal ethical pork belly blue bottle paleo PBR&B. Humblebrag waistcoat roof party kinfolk kitsch lomo, put a bird on it godard authentic hell of forage cronut. Kale chips affogato cloud bread YOLO activated charcoal squid whatever. Pour-over DIY fam mustache affogato kitsch. Helvetica PBR&B freegan microdosing food truck. Food truck helvetica DIY, hexagon brooklyn pabst tote bag seitan gluten-free.",
      storyFiles: "https://placekitten.com/g/200/200"
    },
    {
      title: "Mumblecore seitan",
      symbol: "AAPL",
      summary: "Direct trade authentic pok pok bitters, brunch wayfarers cronut roof party thundercats pickled tumeric portland +1 enamel pin. VHS offal pug readymade, lomo bushwick activated charcoal ethical pork belly blue bottle paleo PBR&B. Humblebrag waistcoat roof party kinfolk kitsch lomo, put a bird on it godard authentic hell of forage cronut. Kale chips affogato cloud bread YOLO activated charcoal squid whatever. Pour-over DIY fam mustache affogato kitsch. Helvetica PBR&B freegan microdosing food truck. Food truck helvetica DIY, hexagon brooklyn pabst tote bag seitan gluten-free.",
      storyFiles: "https://placekitten.com/g/200/200"
    },
  ]

  constructor() { 
    this.stories = [
      ...this.initialStoryState
    ]
  }

  private readonly _stories = new BehaviorSubject<Story[]>([])

  readonly stories$ = this._stories.asObservable();

  //GETTER
  get stories(): Story[] {
    return this._stories.getValue();
  }

  //SETTER
  set stories(val: Story[]) {
    this._stories.next(val);
  }

  addStory(story: Story) {

    const tmpId = Date.now().toString();
    const tmpStory = {
      id: tmpId,
      ...story
    };
    this.stories = [
      ...this.stories,
      tmpStory
    ]
  }






}
