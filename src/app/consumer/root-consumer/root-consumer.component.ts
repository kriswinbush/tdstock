import { Component, OnInit } from '@angular/core';
import { StoryStoreService } from "../../services/story-store.service";
@Component({
  selector: 'app-root-consumer',
  templateUrl: './root-consumer.component.html',
  styleUrls: ['./root-consumer.component.scss']
})
export class RootConsumerComponent implements OnInit {

  constructor(public storyStore: StoryStoreService) { }
  
  ngOnInit() {}

  config = {
    "toolbox": {
      "showTitle": true,
      "top": 0,
      "right": "30px",
      "show": true,
      "feature": {
        "dataView": {
          "title": "View Data",
          "lang": [
            "Data View",
            "Turn Off",
            "Refresh"
          ]
        },
        "dataZoom": {
          "title": {
            "zoom": "Zoom",
            "back": "Back"
          }
        },
        "magicType": {
          "type": [
            "line",
            "bar",
            "stack",
            "tiled"
          ],
          "title": {
            "line": "Line",
            "bar": "Bar",
            "stack": "Stack",
            "tiled": "Tiled"
          }
        },
        "restore": {
          "title": "Restore"
        }
      }
    },
    "xAxis": [
      {
        "data": [
          "GOOG",
          "AAPL",
          "BABA",
        ]
      },
      {
        "show": true,
        "type": "time",
        "boundaryGap": false
      }
    ],
    "yAxis": [
      {
        "show": true,
        "type": "value",
        "axisLabel": {
          "inside": false
        },
        "max": 300
      }
    ],
    "series": [
      {
        "type": "bar",
        "itemStyle": {
          "opacity": 0.95,
          "color": "#007373"
        },
        "markPoint": {
          "data": [
            {
              "name": "test",
              "value": 130,
              "xAxis": 1,
              "yAxis": 130
            }
          ]
        },
        "name": "Yesterday",
        "data": [
          250,
          130,
          100
        ]
      },
      {
        "type": "bar",
        "itemStyle": {
          "opacity": 0.95,
          "color": "#1B98C6"
        },
        "markPoint": {
          "data": [
            {
              "name": "Target",
              "value": 80,
              "xAxis": 1,
              "yAxis": 121
            }
          ]
        },
        "markLine": {
          "data": [
            {
              "name": "Average",
              "value": 30,
              "xAxis": 1,
              "yAxis": 30
            }
          ],
          "symbol": "circle"
        },
        "name": "Today",
        "data": [
          80,
          122,
          80,
        ]
      }
    ],
    "tooltip": {
      "show": true,
      "trigger": "item",
      "showContent": true
    }
  }

}
